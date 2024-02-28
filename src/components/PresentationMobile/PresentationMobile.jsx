import "./presentationMobile.css"

export const PresentationMobile = () => {
  return (
    <header className="header">
        <div className="header-text-container">
            <div className="header-text">
                <h1 className="header-title">¡Bienvenido a TefiYoga!</h1>
                <h2 className="header-subtitle">Un espacio para vos</h2>
            </div>
        </div>
        <div className="header-cta-container">
            <div className="cta-button-container">
                <a href="https://wa.me/5491153191175" target="_blank" className="cta-button">Ir a Whatsapp</a>
            </div>
            <div className="testimony-container">
                <p className="testimony">
                ”El yoga es una luz, la cual, una vez<br/> prendida nunca se apaga. Cuanto<br/> mejor es tu práctica, más brillante es<br/> la llama” BKS Iyengar.
                </p>
            </div>
        </div>
        <img className="mob-gradient-bg" src="/mob-gradient.svg" alt="Gradient Background" />
    </header>
  )
}
