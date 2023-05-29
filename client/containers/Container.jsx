function Container({children}) {
  return (
    <div className="flex mx-auto w-full flex-col h-full items-center gap-5">
      {children}
    </div>
  );
}

export default Container;
