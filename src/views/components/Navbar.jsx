import { Link, NavLink } from "react-router-dom";
import Router from '@/routes'

export default function Navbar() {
  const navLinkStyle = ({isActive}) => ({
    color: isActive ? "red" :"black",
    backgroundColor: isActive ? "black" : "red"
  })
  
  return (
    <>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Nike
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink style={navLinkStyle} className="nav-link active" aria-current="page" to="/men">
                  Men
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/women">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/checkout">
                  Checkout
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/course"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Course
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/course/1">
                      ReactJS
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/course/java/2">
                      Java
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <ul className="submenu">
                  <li><Link to={"/about/rs"}>Ve RikkeiSoft</Link></li>
                  <li><Link to={"/about/ra"}>Ve RikkeiAcademy</Link></li>
                </ul>
              </li> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/about/rs">
                      About RikkeiSoft
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about/ra">
                      About RikkeiAcademy
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" tabIndex={-1}>
                  Login
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      </div>
      <Router />
    </>
  );
}
