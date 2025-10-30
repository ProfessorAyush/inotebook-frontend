import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <i className="bi bi-journal-text me-2"></i>
          iNotebook
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${location.pathname === "/" ? "active fw-semibold" : ""}`}
                to="/"
              >
                <i className="bi bi-house-door me-1"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link px-3 ${location.pathname === "/about" ? "active fw-semibold" : ""}`}
                to="/about"
              >
                <i className="bi bi-info-circle me-1"></i>
                About
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          {!localStorage.getItem('token') ? (
            <div className="d-flex gap-2">
              <Link
                className="btn btn-outline-light"
                to="/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className="btn btn-light"
                to="/signup"
                role="button"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="d-flex align-items-center gap-3">
              <span className="navbar-text text-light">
                <i className="bi bi-person-circle me-1"></i>
                Welcome back!
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-outline-light"
              >
                <i className="bi bi-box-arrow-right me-1"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;