import { useState } from "react";
import "./navmobile.css";

export const NavMobile = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  function scrollToAboutSection() {
    const aboutSection = document.getElementById("about");
    const aboutSectionPosition = aboutSection.offsetTop;
    const offset = 63
    const scrollToPosition = aboutSectionPosition - offset;
    window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth"
    });
}
function scrollToClassesSection() {
  const classesSection = document.getElementById("my-classes");
  const classesSectionPosition = classesSection.offsetTop;
  const offset = 60
  const scrollToPosition = classesSectionPosition - offset;
  window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth"
  });
}
  const handleClickAbout = ()=>{
    scrollToAboutSection()
    handleMenu()
  }
  const handleClickClasses = ()=>{
    scrollToClassesSection()
    handleMenu()
  }
  return (
    <>
      <nav className="nav">
        <div className="nav-logo-container">
          <img
            className="nav-logo"
            src="/mob-logo.png"
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
            <a onClick={handleClickAbout} className="nav-menu-link">
              Sobre mí
            </a>
          </li>
          <li className="nav-menu-list">
            <a onClick={handleClickClasses} className="nav-menu-link">
              Mis clases
            </a>
          </li>
          <li className="nav-menu-list">
            <a onClick={handleMenu} className="nav-menu-link" href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </div>


    </>
  );
};
