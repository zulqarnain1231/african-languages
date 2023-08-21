import React from "react";
import Image from "next/image";
import Link from "next/link";
import Data from "../../constants/Data/DummyData.json";
import LanguageCard from "./LanguageCard";
const Languages = () => {
  const { languages } = Data;
  return (
    <div
      className="w-100 h-100 d-flex flex-column justify-content-start  align-items-center rounded-4 py-4 px-4"
      style={{ minHeight: "100vh", background: "#F6F6F6" }}
    >
      <div className="h-auto w-100 d-flex flex-column gap-5 align-items-center  justify-content-start   mx-auto rounded-4 slide-in">
        <div
          className="position-relative"
          style={{ height: "100px", width: "105px" }}
        >
          <Image
            src={"/Assets/logo.png"}
            alt=""
            fill
            className="w-100 h-100 object-fit-fill "
          />
        </div>
        <div className="page-title">
          <h2 className="fw-medium text-white">Je voudrais apprendre le</h2>
        </div>
        <div className="languages-grid-container">
          {languages.map((item: any, index: number) => (
            <LanguageCard key={index} members={item.members} logo={item.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
