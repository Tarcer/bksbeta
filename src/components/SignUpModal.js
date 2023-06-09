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
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }  
  const handleForm = async (e) => {
    e.preventDefault()

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
      setValidation("6 characters minimun")
      return;
    }
    else if(inputs.current[1].value !== inputs.current[2].value) {
      setValidation("Pas les mêmes mot de passe")
      return;
    }

    try {

      const cred = await signUp(
        inputs.current[0].value,
        inputs.current[1].value
      )
      // formRef.current.reset();
      setValidation("")
      console.log(cred);
      toggleModals("close")
      navigate("/private/private-home")

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
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
      {modalState.signUpModal && (
        <div className="z-1 position-fixed w-100 h-100">
          <div
          onClick={closeModal}
          className="w-100 h-100 bg-dark"
          >
          </div>
            <div
              className="position-absolute top-50 start-50 translate-middle"
              style={{ minWidth: "400px" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header text-light mb-3">
                    <h5 className="modal-title">Inscription</h5>
                    <span style={{ cursor: 'pointer' }}
                    onClick={closeModal}>
                    <i className="fa-solid fa-xmark fa-1x"></i>
                    </span>
                  </div>

                  <div className="modal-body">
                    <form 
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form">
                      <div className="text-light mb-3">
                        <label htmlFor="signUpEmail" className="form-label">
                          Adresse Mail
                        </label>
                        <input
                          ref={addInputs}
                          name="email"
                          required
                          type="email"
                          className="form-control"
                          id="signUpEmail"
                        />
                      </div>

                      <div className="text-light mb-3">
                        <label htmlFor="signUpPwd" className="form-label">
                          Mot de Passe
                        </label>
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                          id="signUpPwd"
                        />
                      </div>

                      <div className="text-light mb-3">
                        <label htmlFor="repeatPwd" className="form-label">
                          Repeter le Mot de Passe
                        </label>
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                          id="repeatPwd"
                        />
                        <p className="text-danger mt-1">{validation}</p>
                      </div>

                      <button className="btn btn-primary ">Envoyer</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

        </div>
      )}
    </>
  );
}
