import { useState } from "react";
import "./navmobile.css";

export const NavMobile = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);

  };
  

  return (
    <>
      <nav className="nav">
        <div className="nav-logo-container">
          <img
            className="nav-logo"
            src="../../public/mob-logo.png"
            alt="Logo"
          />
        </div>
        <div className="nav-menu-container">
          <div
            onClick={handleMenu}
            className={`nav-menu ${menu ? "nav-toggle" : ""}`}
          >
            <span className="line-1"></span>
            <span className="line-toggle-1"></span>
            <span className="line-toggle-2"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
          </div>
        </div>
      </nav>
      <div
        className={`nav-menu-content ${menu ? "nav-menu-content-toggle" : ""}` }
      >
        <ul className="nav-menu-list-container">
          <li className="nav-menu-list">
            <a className="nav-menu-link" href="">
              Sobre mí
            </a>
          </li>
          <li className="nav-menu-list">
            <a className="nav-menu-link" href="">
              Mis clases
            </a>
          </li>
          <li className="nav-menu-list">
            <a className="nav-menu-link" href="">
              Contacto
            </a>
          </li>
        </ul>
      </div>


    </>
  );
};
