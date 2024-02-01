import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__link" to="/"> Home </Link> | <Link className="navbar__link" to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
