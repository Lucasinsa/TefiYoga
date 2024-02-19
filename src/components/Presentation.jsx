import { PresentationMobile } from "./PresentationMobile/PresentationMobile";

const Presentation = () => {
    return (
        <>
        <main className="presentation-container" id="presentation">
            <div className="presentation">
                <img src="/blank-vector.png" alt="Blank vector" className="img-presentation"/>
            </div>
            <div className="presentation-text">
                <h1>¡Bienvenido a TefiYoga!</h1>
                <h2>Un espacio para vos</h2>
                <p>"El yoga es una luz, la cual una vez prendida nunca se apaga. Cuanto mejor es tu práctica, más brillante es la llama" BKS lyengar.</p>
                <a href="https://wa.me/5491153191175" target="_blank" rel="noopener noreferrer">
                    <button className="whatsapp-button" href="https://wa.me/5491153191175" target="_blank" rel="noopener noreferrer">Ir a WhatsApp</button>                   
                </a>
            </div>
        </main>
        <PresentationMobile/>
        </>
    )
}

export default Presentation;