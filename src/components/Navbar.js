import { Link } from "react-router-dom";
import { BsBank } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand  text-light" to="/">
          <h4><BsBank/> Bad Bank</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">

              <Link className="nav-link text-light" to="/CreateAccount">
                Create Account
              </Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Deposit">
                Deposit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Withdrawl">
                Withdrawl
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/AllData">
                All Data
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
