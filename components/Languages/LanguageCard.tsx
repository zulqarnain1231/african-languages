import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  logo: string;
  members: number;
}
const LanguageCard: React.FC<Props> = ({ logo, members }: Props) => {
  return (
    <Link
      href={"/register"}
      className="w-100 d-flex flex-column align-items-center justify-content-start gap-4 text-decoration-none language-card"
    >
      <div
        className="position-relative rounded-circle "
        style={{ height: "120px", width: "120px" }}
      >
        <Image
          src={logo}
          className="w-100 h-100 object-fit-fill rounded-circle"
          fill
          alt=""
        />
      </div>
      <p>{members}</p>
    </Link>
  );
};

export default LanguageCard;
