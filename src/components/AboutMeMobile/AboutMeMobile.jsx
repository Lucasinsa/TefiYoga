import "./aboutMeMobile.css"
export const AboutMeMobile = () => {
  return (
    <main className="main">
      <section className="about-container">
        <div className="about-img-container">
          <img
            className="about-img"
            src="../../../public/mob-teacher.png"
            alt=""
          />
        </div>
        <div className="about-text-container">
          <h3 className="about-text-title">¡Hola, soy Tefi!</h3>
          <p className="about-text-paragraph">
            Comencé mi práctica de yoga hace 11<br/> años en el “Centro Ananda Yoga”
            donde<br/> me formé como Profesora de Hatha<br/> Yoga y Yogaterapia,
            actualmente<br/> practico el método Iyengar con la<br/> intención de
            expandirme en este largo<br/> recorrido.
          </p>
          <p className="about-text-paragraph">
            En mis clases cultivamos el cuerpo y la<br/> mente a través de posturas,
            las cuales se<br/> trabajan de forma evolutiva de acuerdo<br/> a las
            posibilidades de cada alumno,<br/> haciendo énfasis en el movimiento<br/>
            consciente, la fuerza vital y la<br/> respiración, lo que va creando una<br/>
            transformación interior.
          </p>
          <p className="about-text-paragraph">
            Mi misión es compartirte herramientas<br/> de vida consciente que te
            acompañen<br/> en tu camino de despertar a una vida<br/> más plena, verdadera
            y feliz.
          </p>
        </div>
      </section>
      <section></section>
    </main>
  );
};
