import { Link, Outlet } from "react-router-dom";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
const Navbar = (props) => {
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
