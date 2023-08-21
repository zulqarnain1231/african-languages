import React, { useState, useEffect } from "react";
import Image from "next/image";
import TextInput from "../Shared/Inputs/TextInput";
import ErrorModal from "../Shared/Modals/ErrorModal";
import { HiOutlineMail } from "react-icons/hi";

const ForgetPassword = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    email: "",
  });
  const toggleModal = () => {
    setShowModal((prevalue) => !prevalue);
  };
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const { email } = inputs;
  useEffect(() => {
    if (email !== "") {
      setIsFormFilled(true);
    } else setIsFormFilled(false);
  }, [email]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isFormFilled);
    if (!isFormFilled) {
      setShowModal(true);
    }
  };
  return (
    <div
      className="w-100 h-100 d-flex flex-column justify-content-center  align-items-center rounded-4 "
      style={{ minHeight: "100vh", background: "#F6F6F6" }}
    >
      <div className="d-lg-grid h-auto mx-auto rounded-4 forgetpassword-grid-container">
        {/* left section */}
        <form
          onSubmit={handleSubmit}
          className="h-100 d-flex flex-column flex-grow-1 justify-content-center align-items-center gap-2 p-lg-4 p-3 forget-password-form"
        >
          <div className="d-flex align-items-center justify-content-center rounded-circle user-img-wrapper p-4">
            <div className=" position-relative user-img">
              <Image
                src={"/Assets/lock.png"}
                alt=""
                fill
                className="w-100 h-100 object-fit-fill "
              />
            </div>
          </div>
          <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-2 my-4">
            <TextInput
              name="email"
              value={inputs.email}
              setValue={handleInputs}
              type="email"
              placeholder="Email"
              icon={<HiOutlineMail className="input-icon" />}
              required={false}
            />
          </div>
          <button
            type="submit"
            className="mainGradient border-0 py-2 rounded-3 text-white language-btn"
          >
            Recevoir le lien pour changer mon mot de passe
          </button>
        </form>
      </div>
      <ErrorModal open={showModal} setOpen={toggleModal} />
    </div>
  );
};

export default ForgetPassword;
