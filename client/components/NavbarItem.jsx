import { Link } from "react-router-dom"

function NavbarItem({path}) {
  return (
    <Link to={path}>{path.slice(1)}</Link>
  )
}

export default NavbarItem