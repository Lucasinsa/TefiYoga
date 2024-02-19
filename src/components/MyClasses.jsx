import CustomCard from "./CustomCard.jsx"

const MyClasses = () => {
    return (
        <section className="my-classes-container" id="my-classes">
            <div>
            <h3 className="my-classes-title">Unite a mis clases</h3>
            <p className="my-classes-paragraph">Despertá al maestro que habita dentro<br/> de vos y descubrí tu esencia, aquello<br/> que realmente viniste a ser.</p>
            </div>
            
            <div className="cards-container">
                <CustomCard title="Yoga - Principiante" photo="/card-img-1.png" icon="/hand-vector.png" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ofoaccusamus ducimus! Lorem ipsum. Lorem ipsum." color="#9C7781" className="hand-icon"/>
                <CustomCard title="Yoga - Intermedio" photo="/card-img-2.png" icon="/hands-up-vector.png" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ofoaccusamus ducimus! Lorem ipsum. Lorem ipsum." color="#4B6565" className="hands-up-icon" />
                <CustomCard title="Taller de mujeres" photo="/card-img-3.png" icon="/figure-vector.png" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ofoaccusamus ducimus! Lorem ipsum. Lorem ipsum." color="#B68B41" className="figure-icon" />
            </div>
        </section>
    )
}

export default MyClasses;