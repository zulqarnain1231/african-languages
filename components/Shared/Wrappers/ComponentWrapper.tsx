interface Props {
  id?: string;
  style?: string;
  children: React.ReactNode;
}

function ComponentWrapper({ id, children, style }: Props) {
  return (
    <section id={id} className={style}>
      <div className="w-full h-full max-w-[1360px] mx-auto md:px-10 px-4">
        {children}
      </div>
    </section>
  );
}

export default ComponentWrapper;
