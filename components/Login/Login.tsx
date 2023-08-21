import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../Shared/Inputs/TextInput";
import { HiOutlineMail } from "react-icons/hi";
import { HiMiniLockClosed } from "react-icons/hi2";
import ErrorModal from "../Shared/Modals/ErrorModal";

const Login = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const toggleModal = () => {
    setShowModal((prevalue) => !prevalue);
  };
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const { email, password } = inputs;
  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsFormFilled(true);
    } else setIsFormFilled(false);
  }, [email, password]);
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
      <div className="d-lg-grid h-auto mx-auto rounded-4 login-grid-container">
        {/* left section */}
        <form
          onSubmit={handleSubmit}
          className="h-100 d-flex flex-column flex-grow-1 justify-content-center align-items-center gap-2 p-lg-5 p-2 login-left-section"
        >
          <div className="d-flex align-items-center justify-content-center rounded-circle user-img-wrapper p-4">
            <div className=" position-relative user-img">
              <Image
                src={"/Assets/user.png"}
                alt=""
                fill
                className="w-100 h-100 object-fit-fill "
              />
            </div>
          </div>
          <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-2 mb-4">
            <TextInput
              name="email"
              value={inputs.email}
              setValue={handleInputs}
              type="email"
              placeholder="Email"
              icon={<HiOutlineMail className="input-icon" />}
              required={false}
            />
            <TextInput
              name="password"
              value={inputs.password}
              setValue={handleInputs}
              type="password"
              placeholder="Mot de passe"
              icon={<HiMiniLockClosed className="input-icon" />}
              required={false}
            />
          </div>
          <button
            type="submit"
            className="mainGradient border-0 py-2 rounded-3 text-white language-btn"
          >
            Connexion
          </button>
          <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-1">
            <p className="text-center">Mot de passe oublié ?</p>
            <Link href={"/languages"} className="outlined-link">
              Créer un compte ?
            </Link>
          </div>
        </form>

        {/* right section */}
        <div className=" h-100 d-lg-flex d-none flex-column align-items-center justify-content-center gap-4 p-5 mainGradient login-right-section">
          <div className="bg-white rounded-circle p-4">
            <div className="position-relative login-logo-img">
              <Image
                src={"/Assets/logo.png"}
                className="w-100 h-100 object-fit-fill "
                fill
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <ErrorModal open={showModal} setOpen={toggleModal} />
    </div>
  );
};

export default Login;
