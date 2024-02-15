const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <h3>¡Comenzá hoy tu viaje hacia el bienestar!</h3>
            <div className="contact-p-container">
                <p>Tomá la práctica como un proceso constante de autoconocimiento y de reencontrarte con vos mismo desde lo más profundo.</p>
                <p>Te invito a mis clases para recibir mi mirada y mi atención como guía.</p>
                <p>Contactame por WhatsApp para reservar tu cupo.</p>
            </div>
            <div className="button-container">
                <a href="https://wa.me/5491153191175" target="_blank" rel="noopener noreferrer">
                    <button className="whatsapp-button">Ir a WhatsApp</button> 
                </a>
            </div>           
        </section>
    )
}

export default Contact;