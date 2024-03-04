import { AboutMeMobile } from "./AboutMeMobile/AboutMeMobile";

const AboutMe = () => {
    return (
        <>
        <section className="about-me-container" id="about-me">
            <div className="img-container">
                <img className="desk-teacher" src="/desk-teacher.png" alt="Teacher"/>
            </div>
            <div className="biography-container">
                <h3>!Hola, soy Tefi!</h3>
                <p>Comencé mi práctica de yoga hace 11 años en el “Centro Ananda Yoga” donde me formé como Profesora de Hatha Yoga y Yogaterapia, actualmente practico el método Iyengar con la intención de expandirme. Apasionada de esta disciplina, me introduje en el Método Iyengar y actualmente me encuentro en formación y contínuo aprendizaje en el “Centro Iyengar Yoga Buenos Aires”.</p>
                <p>En mis clases cultivamos el cuerpo y la mente a través de posturas, las cuales se trabajan de forma evolutiva de acuerdo a las posibilidades de cada alumno, haciendo énfasis en el movimiento consciente, la fuerza vital y la respiración, lo que va creando una transformación interior.</p>
                <p>Mi misión es compartirte herramientas de vida consciente que te acompañen en tu camino de despertar a una vida más plena, verdadera y feliz.</p>
            </div>
        </section>      
        <AboutMeMobile/>
        </>  
    )
}

export default AboutMe;