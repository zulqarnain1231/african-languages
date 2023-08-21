import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TextInput from "../Shared/Inputs/TextInput";
import { HiOutlineMail, HiOutlineCheckCircle } from "react-icons/hi";
import { HiMiniLockClosed } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiPhoneCall, BiLockAlt } from "react-icons/bi";
import * as Icons from "../../constants/Icons/Icons";
import ErrorModal from "../Shared/Modals/ErrorModal";
const Register = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    password: "",
    address: "",
    telephone: "",
    confirmPassword: "",
  });
  const toggleModal = () => {
    setShowModal((prevalue) => !prevalue);
  };
  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const { email, password, confirmPassword, telephone, address, name } = inputs;
  useEffect(() => {
    if (
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      address !== "" &&
      telephone !== "" &&
      name !== ""
    ) {
      setIsFormFilled(true);
    } else setIsFormFilled(false);
  }, [email, password, confirmPassword, telephone, address, name]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormFilled) {
      setShowModal(true);
    }
  };
  return (
    <div
      className="w-100 h-100 d-flex flex-column justify-content-center  align-items-center rounded-4 "
      style={{ minHeight: "100vh", background: "#F6F6F6" }}
    >
      <div className="d-lg-grid h-auto mx-auto rounded-4 register-grid-container">
        {/* left section */}
        <form
          onSubmit={handleSubmit}
          className="h-100 d-flex flex-column flex-grow-1 justify-content-center align-items-center gap- p-lg-5 p-2 login-left-section"
        >
          <div className="d-flex align-items-center justify-content-center rounded-circle user-img-group-wrapper p-1">
            <div className=" position-relative user-group-img">
              <Image
                src={"/Assets/user-group.png"}
                alt=""
                fill
                className="w-100 h-100 object-fit-fill "
              />
            </div>
          </div>
          <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-3 mb-4">
            <TextInput
              name="name"
              value={inputs.name}
              setValue={handleInputs}
              type="text"
              placeholder="Nom & Prénom *"
              icon={<AiOutlineUser className="input-icon" />}
              required={false}
            />
            <TextInput
              name="email"
              value={inputs.email}
              setValue={handleInputs}
              type="email"
              placeholder="Email *"
              icon={<HiOutlineMail className="input-icon" />}
              required={false}
            />
            <TextInput
              name="address"
              value={inputs.address}
              setValue={handleInputs}
              type="text"
              placeholder="Addresse "
              icon={<MdOutlineLocationOn className="input-icon" />}
              required={false}
            />
            <TextInput
              name="telephone"
              value={inputs.telephone}
              setValue={handleInputs}
              type="tel"
              placeholder="Téléphone "
              icon={<BiPhoneCall className="input-icon" />}
              required={false}
            />
            <div className="w-100 d-flex flex-sm-row flex-column align-items-center  justify-content-between gap-sm-2 gap-3">
              <TextInput
                name="password"
                value={inputs.password}
                setValue={handleInputs}
                type="password"
                placeholder="Mot de passe *"
                icon={<BiLockAlt className="input-icon" />}
                required={false}
              />
              <TextInput
                name="confirmPassword"
                value={inputs.confirmPassword}
                setValue={handleInputs}
                type="password"
                placeholder="Confirmation *"
                icon={<HiOutlineCheckCircle className="input-icon" />}
                required={false}
              />
            </div>
          </div>
          <button
            type="submit"
            className="mainGradient border-0 py-2 rounded-3 text-white language-btn"
          >
            Créer un compte
          </button>

          <Link
            href={"/login"}
            className=" mainGradient border-0  py-2 px-5 rounded-3 text-white text-decoration-none fw-bold "
          >
            Connexion
          </Link>
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

export default Register;
