import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
  const { modalState, toggleModals, signIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [validation, setValidation] = useState("");
  const inputs = useRef([]);
  const addInputs = (el) => {
    if (el && !inputs.current.includes(el)) {
      inputs.current.push(el);
    }
  };
  const formRef = useRef();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(inputs)
    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      setValidation("");
      console.log(cred);
      toggleModals("close");
      navigate("/private-home");
    } catch {
      setValidation("Wopsy, email and/or password incorrect");
    }
  };

  const closeModal = () => {
    setValidation("");
    toggleModals("close");
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("bg-black")) {
      closeModal();
    }
  };

  const next = () => {
    closeModal()
    toggleModals("signUp")
  }

  return (
    <>
      {modalState.signInModal && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-t-xl shadow-lg w-[500px]">
            <div className="bg-[#DA6B7A] flex text-light justify-center mb-10 rounded-lg">
              <h5 className="text-[30px] font-roboto text-white">
                Se connecter
              </h5>
              <span style={{ cursor: 'pointer' }} onClick={closeModal}>
                <i className="fa-solid fa-xmark fa-1x"></i>
              </span>
            </div>
            <form ref={formRef} onSubmit={handleForm}>
              <div className="text-light my-5 px-7">
                <input
                  ref={addInputs}
                  name="email"
                  required
                  type="email"
                  className="w-full h-12 text-2xl text-center rounded-full bg-[#EBEBEB] p-2"
                  id="signInEmail"
                  placeholder="Adresse Email"
                />
              </div>
              <div className="mb-3 px-7">
                <input
                  ref={addInputs}
                  name="pwd"
                  required
                  type="password"
                  className="w-full text-2xl h-12 text-center rounded-full bg-[#EBEBEB] p-2"
                  id="signInPwd"
                  placeholder="Mot de passe"
                />
                <p className="text-center text-[#b91c1c] m-10">{validation}</p>
              </div>
              <div className="flex justify-center">
                <button className="cursor-pointer h-16 w-[300px] bg-[#DA6B7A] text-white font-medium text-2xl rounded-full">
                  Se connecter
                </button>
              </div>
              <div className="flex flex-col text-center mt-24">
                <b className="text-darkgray font-roboto font- m-2">Vous n'avez pas de compte ?</b>
                <b className="cursor-pointer text-[#DA6B7A] font-roboto m-5" onClick={next}>S'INSCRIRE</b>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
