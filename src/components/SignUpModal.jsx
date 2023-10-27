import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import {useNavigate} from "react-router-dom";

export default function SignUpModal() {
  
  const { modalState, toggleModals, signUp } = useContext(UserContext);
  const navigate = useNavigate(); 
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const formRef = useRef();
  const addInputs = el => {
    console.log(el)
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }  
  const handleForm = async (e) => {
    e.preventDefault()
    console.log(inputs.current[1].value)
    if((inputs.current[1].value.length < 6 || inputs.current[2].value.length) < 6) {
      setValidation("6 characters minimun")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Pas les mêmes mot de passe")
      return;
    }

    try {
      console.log('la')
      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      setValidation("")
      console.log(cred);
      toggleModals("close")
      navigate("/")

    } catch (err) {

      if(err.code === "auth/invalid-email") {
        setValidation("Email format invalid")
      }
      
      if(err.code === "auth/email-already-in-use") {
        setValidation("Email already used")
      }
 
    }

  }

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("bg-black")) {
      closeModal();
    }
  };

  return (
    <>
      {modalState.signUpModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-t-xl shadow-lg w-[500px]">
            <div className="bg-[#DA6B7A] flex text-light justify-center mb-10 rounded-lg">
              <h5 className="text-[30px] font-roboto text-white">
                S'inscrire
              </h5>
              <span style={{ cursor: 'pointer' }} onClick={closeModal}>
                <i className="fa-solid fa-xmark fa-1x"></i>
              </span>
            </div>
            <form ref={formRef} onSubmit={handleForm}>
              <div className="text-light my-5 px-7">
                <input
                  ref={el => addInputs(el)}
                  name="email"
                  required
                  type="email"
                  className="w-full h-12 text-2xl text-center rounded-full bg-[#EBEBEB] p-2"
                  id="signUpEmail"
                  placeholder="Adresse Email"
                />
              </div>
              <div className="mb-3 px-7">
                <input
                  ref={el => addInputs(el)}
                  name="pwd"
                  required
                  type="password"
                  className="w-full text-2xl h-12 text-center rounded-full bg-[#EBEBEB] p-2"
                  id="signUpPwd"
                  placeholder="Mot de passe"
                />
                <input
                  ref={el => addInputs(el)}
                  name="pwd"
                  required
                  type="password"
                  className="w-full text-2xl h-12 text-center rounded-full bg-[#EBEBEB] mt-5  p-2"
                  id="repeatPwd"
                  placeholder="Confirmez le mot de passe"
                />

                <p className="text-center text-[#b91c1c] m-10">{validation}</p>
              </div>
              <div className="flex justify-center">
                <button className="cursor-pointer h-16 w-[300px] bg-[#DA6B7A] text-white font-medium text-2xl rounded-full">
                  Envoyer
                </button>
              </div>
              <div className="flex flex-col text-center mt-24">
                <b className="text-darkgray font-roboto font- m-2">Vous avez déjà un compte ?</b>
                <b className="cursor-pointer text-[#DA6B7A] font-roboto m-5" onClick={() => toggleModals("signIn")}>Se connecter</b>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
