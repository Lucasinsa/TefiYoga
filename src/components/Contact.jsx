const Contact = () => {
    return (
        <section className="contact-container" id="contact">
            <div>
            <h3 className="contact-title">¡Comenzá hoy tu viaje hacia<br/> el bienestar!</h3>
            
            <div className="contact-p-container">
                <p>Tomá la práctica como un proceso<br/> constante de autoconocimiento y de<br/> reencontrarte con vos mismo desde lo<br/> más profundo.</p>
                <p>Te invito a mis clases para recibir mi<br/> mirada y mi atención como guía.</p>
                <p>Contactame por WhatsApp para<br/> reservar tu cupo.</p>
            </div>
            <div className="button-container">
                <a href="https://wa.me/5491153191175" target="_blank" rel="noopener noreferrer">
                    <button className="whatsapp-button">Ir a WhatsApp</button> 
                </a>
            </div>        
            </div>   
        </section>
    )
}

export default Contact;