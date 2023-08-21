import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div
      className="w-100 h-100 d-flex flex-column justify-content-center  align-items-center rounded-4 "
      style={{ minHeight: "100vh" }}
    >
      {/* for screens bigger then 768px */}
      <div className="w-75 d-md-grid d-none  h-auto mx-auto bg-white rounded-4 home-shadow grid-container">
        {/* left section */}
        <div className=" h-100 d-flex flex-column align-items-center justify-content-center gap-4 p-5 mainGradient login-left-section">
          <div className="bg-white rounded-circle p-4">
            <div className="position-relative logo-img">
              <Image
                src={"/Assets/logo.png"}
                className="w-100 h-100 object-fit-fill "
                fill
                alt=""
              />
            </div>
          </div>
          <div className="position-relative intro-img">
            <Image
              src={"/Assets/intro.png"}
              className="w-100 h-100 object-fit-fill "
              fill
              alt=""
            />
          </div>
        </div>
        {/* right section */}
        <div className="h-100 d-flex flex-column flex-grow-1 justify-content-center align-items-center gap-2 bg-white p-5 login-right-section">
          <h1 className="text-center">
            Apprendre facilement une langue africaine
          </h1>
          <div className="">
            <p className="text-center">
              Grâce à des contenus réalistes, ludiques et complets
            </p>
          </div>

          <button className="mainGradient border-0 py-2 rounded-3 text-white language-btn">
            Choisir une langue
          </button>
          <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-1">
            <p className="text-center">Déjà membre ?</p>
            <Link href={"/login"} className="login-btn">
              Connectez-vous
            </Link>
          </div>
        </div>
      </div>

      {/* for small  screens*/}
      <div className="w-100 h-100 px-4 d-md-none d-flex flex-column align-items-center justify-content-center gap-2">
        <div className="bg-white rounded-circle p-4 home-shadow logo-img-mobile">
          <div className="position-relative logo-img">
            <Image
              src={"/Assets/logo.png"}
              className="w-100 h-100 object-fit-fill "
              fill
              alt=""
            />
          </div>
        </div>
        <div className="h-100 d-flex flex-column flex-grow-1 justify-content-center align-items-center gap-2 px-4 right-section-mobile">
          <h1 className="text-center">
            Apprendre facilement une langue africaine
          </h1>
          <div className="">
            <p className="text-center">
              Grâce à des contenus réalistes, ludiques et complets
            </p>
          </div>

          <button className="mainGradient border-0 py-2 rounded-3 text-white language-btn">
            Choisir une langue
          </button>
          <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-1">
            <p className="text-center">Déjà membre ?</p>
            <Link href={"/login"} className="login-btn">
              Connectez-vous
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
