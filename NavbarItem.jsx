import { Link } from "react-router-dom"

function NavbarItem({path}) {
  return (
    <Link to={path} className="text-white">{path.slice(1)}</Link>
  )
}

export default NavbarItem