import CustomCard from "./CustomCard.jsx";

const MyClasses = () => {
  return (
    <section className="my-classes-container" id="my-classes">
      <div>
        <h3 className="my-classes-title">Unite a mis clases</h3>
        <p className="my-classes-paragraph">
          Despertá al maestro que habita dentro
          <br /> de vos y descubrí tu esencia, aquello
          <br /> que realmente viniste a ser.
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
          title="Yoga principiante/intermedio"
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
          title="Taller: Yoga y energía femenina"
          photo="/card-img-3.png"
          icon="/figure-vector.svg"
          description="Un taller para despertar tu energía creativa y reencontrarte con vos misma a través de un viaje de autoconocimiento."
          days="Día: Sábado 9 de marzo "
          horary="Horario: A confirmar"
          place="Lugar: “Habito Gym” Pejerrey 1290 - Pinamar"
          color="#B68B41"
          className="figure-icon"
          dayIcon="/calendar-yellow.svg"
          relojIcon="/reloj-yellow.svg"
          placeIcon="/place-yellow.svg"
        />
      </div>
    </section>
  );
};

export default MyClasses;
