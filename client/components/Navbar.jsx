import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import SocialMediaItem from "./SocialMediaItem";

function Navbar() {
  const paths = ["/Color", "/Random"];
  const links = [
    { url: "https://github.com/hecabre", img: "github_icon.png" },
    {
      url: "https://www.linkedin.com/in/aaron-hernández-cabrera-b13198271/",
      img: "linkedin_icon.png",
    },
  ];
  return (
    <nav className="flex align-middle py-9 font-custom">
      <div className="w-1/3 justify-center flex">
        <img
          src="../assets/logo.png"
          alt="logo"
          className="rounded-lg w-10 h-10"
        ></img>
      </div>
      <ul className="w-1/3 flex justify-around text-grey items-center">
        <Link to={"/Word"}>
          <li className="bg-blueSky py-2 px-3 text-white rounded-3xl w-20 text-center font-medium text-sm">
            Word
          </li>
        </Link>
        {paths.map((path) => (
          <NavbarItem path={path} key={path}></NavbarItem>
        ))}
      </ul>
      <ul className="flex w-1/4 justify-end gap-3">
        {links.map((e) => (
          <SocialMediaItem link={e} key={e.img}></SocialMediaItem>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;