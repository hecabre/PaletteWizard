import { Link } from "react-router-dom"

function NavbarItem({path}) {
  return (
<<<<<<< Updated upstream
    <Link to={path}>{path.slice(1)}</Link>
=======
    <Link to={path} className="text-white">{path.slice(1)}</Link>
>>>>>>> Stashed changes
  )
}

export default NavbarItem