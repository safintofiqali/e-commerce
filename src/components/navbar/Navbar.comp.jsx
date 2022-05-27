/* IMPORT : LIBRARIES */
import { Link, Outlet } from "react-router-dom";

/* IMPORT : STYLES */
import "./navbar.styles.scss";

/* IMPORT : COMPONENTS */
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

/* RENDER COMPONENT - STARTS */
const Navbar = (props) => {
  // RETURN ELEMENTS - AREA
  return (
    <>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/authentication">
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
