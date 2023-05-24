import NavbarItem from "./NavbarItem";

function Navbar() {
  const paths = ["/random", "/word", "/color"];
  return (
    <nav className="flex justify-around h-10 bg-slate-600">
      <div className="w-1/2">
        <img
          src="../assets/PaletteWizard.png"
          alt="logo"
          className="rounded-lg w-10 h-10"
        ></img>
      </div>
      {paths.map((path) => (
        <NavbarItem path={path} key={path}></NavbarItem>
      ))}
    </nav>
  );
}

export default Navbar;
