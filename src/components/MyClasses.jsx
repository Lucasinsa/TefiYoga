import CustomCard from "./CustomCard.jsx";

const MyClasses = () => {
  return (
    <section className="my-classes-container" id="my-classes">
      <div className="my-classes-text-container">
        <h3 className="my-classes-title">Unite a mis clases</h3>
        <p className="my-classes-paragraph">
          Despertá al maestro que habita dentro de vos y descubrí tu esencia,
          aquello que realmente viniste a ser.
        </p>
      </div>

      <div className="cards-container">
        <CustomCard
          title="Yoga desde cero"
          photo="/card-img-1.png"
          icon="/hand-vector.svg"
          description="El yoga es unión, para que haya unión debe existir primero conexión. Conéctate con vos mismo."
          days="Días: Lunes y Miércoles"
          horary="Horario: 17:00 hs"
          place="Lugar: “Jardin, salud y bienestar” Olazabal 5045 (timbre sala) - Villa Urquiza (Caba)."
          color="#9C7781"
          className="hand-icon"
          dayIcon="/calendar-pink.svg"
          relojIcon="/reloj-pink.svg"
          placeIcon="/place-pink.svg"
        />
        <CustomCard
          title="Yoga intermedio"
          photo="/card-img-2.png"
          icon="/hands-up-vector.svg"
          description="La meta principal del yoga es la realización del Sí-mismo o la elevación del cuerpo y de la mente hacia el alma."
          days="Días: Lunes y Miércoles"
          horary="Horario: 8:30hs"
          place="Lugar: “Jardin, salud y bienestar” Olazabal 5045 (timbre sala) - Villa Urquiza (Caba)."
          color="#4B6565"
          className="hands-up-icon"
          dayIcon="/calendar-green.svg"
          relojIcon="/reloj-green.svg"
          placeIcon="/place-green.svg"
        />
        <CustomCard
          title="Mis talleres de Yoga y Meditación"
          photo="/card-img-3.png"
          icon="/figure-vector.svg"
          description="Sumérgete en un viaje hacia tu esencia con mis talleres cuidadosamente diseñados para ti. Únete y descubre el poder de ser quien realmente quieres."
          color="#B68B41"
          className="figure-icon"
          wppIcon= "/wpp-yellow.svg"
          wppText="Para más información sobre mis talleres, ¡contáctame!"
        />
      </div>
    </section>
  );
};

export default MyClasses;
