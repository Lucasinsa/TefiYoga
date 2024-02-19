import { FooterMobile } from "./FooterMobile/FooterMobile";

const Footer = () =>{
    return (
        <>
        <footer className="footer">
            <a href="#presentation">
                <img src="/desk-logo.png" alt="Logo" className='custom-desk-logo'/>
            </a>
            <div className="links-container">
                <a href="#about-me">Sobre mí</a>
                <a href="#my-classes">Mis clases</a>
                <a href="#contact">Contacto</a>
            </div>
            <div className="social-container">
                <div className="logos-container">
                    <a href="https://wa.me/5491153191175" target="_blank" rel="noopener noreferrer"><img src="/whatsapp-logo.png" alt="Whatsapp logo"/></a>
                    <a href="https://www.instagram.com/tefi.yoga/" target="_blank"><img src="/instagram-logo.png" alt="Instagram logo"/></a>
                </div>
                <h4>Redes sociales</h4>
            </div>
        </footer>
        <FooterMobile/>
        </>
    )
}

export default Footer;