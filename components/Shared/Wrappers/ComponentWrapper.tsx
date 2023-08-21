import React from "react";
interface Props {
  id?: string;
  style?: string;
  children: React.ReactNode;
}

const ComponentWrapper: React.FC<Props> = ({ id, children, style }: Props) => {
  return (
    <section id={id} className={style}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default ComponentWrapper;
