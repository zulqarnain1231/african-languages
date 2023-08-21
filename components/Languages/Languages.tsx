import React from "react";
import Image from "next/image";
import Link from "next/link";
const Languages = () => {
  return (
    <div
      className="w-100 h-100 d-flex flex-column justify-content-start  align-items-center rounded-4 py-4"
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
          {[1, 2, 3, 4, 5, 6, 7].map((item: any, index: number) => (
            <Link
              key={index}
              href={"/register"}
              className="w-100 d-flex flex-column align-items-center justify-content-start gap-4 text-decoration-none language-card"
            >
              <div
                className="position-relative rounded-circle "
                style={{ height: "120px", width: "120px" }}
              >
                <Image
                  src={"/Assets/Languages/bambara.png"}
                  className="w-100 h-100 object-fit-fill rounded-circle"
                  fill
                  alt=""
                />
              </div>
              <p>3044 members</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
