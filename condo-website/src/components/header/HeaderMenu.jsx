import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const [menuOpen, setMenuOpen] = useState(false);
  const [documentsOpen, setDocumentsOpen] = useState(false);
  const [bylawsOpen, setBylawsOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1100);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setDocumentsOpen(false);
    setBylawsOpen(false);
    setRulesOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    closeMenu();
    navigate("/Login");
  };

  useEffect(() => {
    const handleInteraction = (event) => {
      if (!isMobile || !menuOpen) return;

      const clickedInsideMenu =
        menuRef.current &&
        menuRef.current.contains(event.target);

      const clickedMenuButton =
        buttonRef.current &&
        buttonRef.current.contains(event.target);

      if (!clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);

    return () => {
      document.removeEventListener("mousedown", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
    };
  }, [menuOpen, isMobile]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1100;
      setIsMobile(mobile);

      if (!mobile) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav
        ref={menuRef}
        className={`header-menu ${menuOpen ? "open" : ""}`}
      >
        <Link to="/" onClick={closeMenu}>Home</Link>

        <Link to="/Budget" onClick={closeMenu}>Budgets</Link>

        <div className="dropdown">

          <button
            className="dropbtn"
            onClick={() => {
              if (isMobile) {
                setDocumentsOpen(!documentsOpen);
              }
            }}
          >
            Governing Documents {isMobile ? (documentsOpen ? "▼" : "▶") : "▾"}
          </button>

          <div
            className={`dropdown-content ${
              !isMobile || documentsOpen ? "show" : ""
            }`}
          >

            <div className="submenu">

              <button
                className="submenu-toggle"
                onClick={() => {
                  if (isMobile) {
                    setBylawsOpen(!bylawsOpen);
                  }
                }}
              >
                Bylaws {isMobile ? (bylawsOpen ? "▼" : "▶") : "▸"}
              </button>

              <div
                className={`submenu-content ${
                  !isMobile || bylawsOpen ? "show" : ""
                }`}
              >
                <Link to="/Bylaw1" onClick={closeMenu}>Bylaw 1</Link>
                <Link to="/Bylaw2" onClick={closeMenu}>Bylaw 2</Link>
                <Link to="/Bylaw3" onClick={closeMenu}>Bylaw 3</Link>
                <Link to="/Bylaw4" onClick={closeMenu}>Bylaw 4</Link>
                <Link to="/Bylaw5" onClick={closeMenu}>Bylaw 5</Link>
              </div>
            </div>

            <div className="submenu">

              <button
                className="submenu-toggle"
                onClick={() => {
                  if (isMobile) {
                    setRulesOpen(!rulesOpen);
                  }
                }}
              >
                Rules & Regulations {isMobile ? (rulesOpen ? "▼" : "▶") : "▸"}
              </button>

              <div
                className={`submenu-content ${
                  !isMobile || rulesOpen ? "show" : ""
                }`}
              >
                <Link to="/Rules-Regulations" onClick={closeMenu}>
                  2011 Rules and Regulations
                </Link>

                <Link to="/Winter-Parking-Ban-Rule" onClick={closeMenu}>
                  Winter Parking Ban Rule
                </Link>

                <Link to="/Short-Term-Tenancies-Rule" onClick={closeMenu}>
                  Short Term Tenancies Rule
                </Link>
              </div>
            </div>

            <Link to="/Declaration" onClick={closeMenu}>
              Declaration
            </Link>

          </div>
        </div>

        <Link to="/Contact" onClick={closeMenu}>Contact Us</Link>
        <Link to="/AGM-Minutes" onClick={closeMenu}>AGM Minutes</Link>
        <Link to="/Forms" onClick={closeMenu}>Forms</Link>
        <Link to="/Newsletter" onClick={closeMenu}>Newsletter</Link>
        <Link to="/ReserveFundStudy" onClick={closeMenu}>Reserve Fund Study</Link>

        <Link
          to="/Visitor-Parking-Registration"
          onClick={closeMenu}
        >
          Visitor Parking Registration
        </Link>

        <Link
          to="/Insurance-Certificate"
          onClick={closeMenu}
        >
          Insurance Certificate
        </Link>

        <Link to="/Admin" onClick={closeMenu}>
          Admin
        </Link>

        {token ? (
          <button
            className="login-logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/Login"
            className="login-logout-btn"
            onClick={closeMenu}
          >
            Login
          </Link>
        )}
      </nav>
    </>
  );
};

export default HeaderMenu;