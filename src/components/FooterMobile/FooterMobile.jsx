import "./footerMobile.css"

export const FooterMobile = () => {
    function scrollToAboutSection() {
        const aboutSection = document.getElementById("about");
        const aboutSectionPosition = aboutSection.offsetTop;
        const offset = 55
        const scrollToPosition = aboutSectionPosition - offset;
        window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth"
        });
    }
    function scrollToClassesSection() {
        const classesSection = document.getElementById("my-classes");
        const classesSectionPosition = classesSection.offsetTop;
        const offset = 40
        const scrollToPosition = classesSectionPosition - offset;
        window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth"
        });
      }

  return (
    <footer className="footer-mobile">
        <div className="footer-mob-logo-container">
            <a href="#home"><img className="footer-mob-logo" src="/mob-logo.png" alt="Logo" /></a>
        </div>
        <div className="footer-mob-social-container">
            <div className="footer-mob-social-icon-container">
            <a href="https://wa.me/5491153191175" target="_blank" rel="noopener noreferrer"><img className="footer-mob-social-icon" src="/whatsapp-logo.svg" alt="Whatsapp" /></a>
            <a href="https://www.instagram.com/tefi.yoga/" target="_blank"><img className="footer-mob-social-icon" src="/instagram-logo.svg" alt="Instagram" /></a>
            </div>
            <div>
                <p className="footer-mob-social-text">Redes sociales</p>
            </div>
        </div>
        <div className="footer-navigation-container">
            <ul className="footer-navigation-list-container">
                <li className="footer-navigation-list"><a className="footer-navigation-link" onClick={scrollToAboutSection}>Sobre mi</a></li>
                <li className="footer-navigation-list"><a className="footer-navigation-link" onClick={scrollToClassesSection}>Mis clases</a></li>
                <li className="footer-navigation-list"><a className="footer-navigation-link" href="#contact">Contacto</a></li>
            </ul>
        </div>
    </footer>
  )
}
