import { Link } from "react-router-dom";

function NavbarItem({ path }) {
  return (
    <li className="text-grey text-sm">
      <Link to={path}>{path.slice(1)}</Link>
    </li>
  );
}

export default NavbarItem;
