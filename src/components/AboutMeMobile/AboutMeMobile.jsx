import "./aboutMeMobile.css"
export const AboutMeMobile = () => {
  return (
    <>

    <main className="main"  id="about">
      <section className="about-container">
        <div className="about-img-container">
          <img
            className="about-img"
            src="/mob-teacher.png"
            alt="Teacher"
          />
        </div>
        <div className="about-text-container">
          <div className="about-title-container"><h3 className="about-text-title">¡Hola, soy Tefi!</h3></div>
          
          <p className="about-text-paragraph">
            Comencé mi práctica de yoga hace 11 años en el “Centro Ananda Yoga”
            donde me formé como Profesora de Hatha Yoga y Yogaterapia,
            actualmente practico el método Iyengar con la intención de
            expandirme en este largo recorrido.
          </p>
          <p className="about-text-paragraph">
            En mis clases cultivamos el cuerpo y la mente a través de posturas,
            las cuales se trabajan de forma evolutiva de acuerdo a las
            posibilidades de cada alumno, haciendo énfasis en el movimiento
            consciente, la fuerza vital y la respiración, lo que va creando una
            transformación interior.
          </p>
          <p className="about-text-paragraph">
            Mi misión es compartirte herramientas de vida consciente que te
            acompañen en tu camino de despertar a una vida más plena, verdadera
            y feliz.
          </p>
        </div>
      </section>
    </main>
    </>
  );
};
