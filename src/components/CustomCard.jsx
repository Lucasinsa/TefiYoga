import Swal from "sweetalert2";

const CustomCard = ({
  title,
  photo,
  icon,
  description,
  days,
  horary,
  place,
  color,
  className,
  dayIcon,
  relojIcon,
  placeIcon,
  wppIcon,
  wppText
}) => {
  //Whatsapp redirection handler
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = "5491153191175";
    const message = `Hola! Me gustaría obtener más información sobre ${title}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  //Card click handler
  const handleCardClick = () => {
    Swal.fire({
      title: title,
      html: `
                    <p style="margin-bottom: 15px; margin-top: 25px; text-align: center; color: rgb(71, 68, 68);">
                        ¿Querés conocer un poco más de mis clases?
                    </p>
                    <p style="margin-bottom: 0px; color: rgb(71, 68, 68);">
                        Contactame a WhatsApp para más información.
                    </p>
                  `,
      confirmButtonText: "Ir a WhatsApp",
      showCloseButton: true,
      padding: "4em",
      width: "50%",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        confirmButton: "custom-swal-button",
        closeButton: "custom-swal-close-button",
      },
      preConfirm: () => {
        handleWhatsAppButtonClick();
      },
    });
  };

  return (
    <div className="custom-card" onClick={handleCardClick}>
      <img className="card-img" src={photo} alt={title} />
      <div className="icon-container-absolute">
        <div className="icon-container-relative">
          <svg
            width="72"
            height="65"
            viewBox="0 0 72 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="card-icon"
          >
            <path
              d="M36.9711 0.504488C36.9711 0.504488 52.2838 -1.54483 59.6861 2.96453C69.2868 8.81301 71.6988 25.9226 71.6988 25.9226C71.6988 25.9226 72.9893 38.0203 69.8548 45.0925C65.6498 54.5801 59.8458 60.7387 49.8375 63.2442C41.1955 65.4076 34.986 64.2887 28.5865 59.2499C24.6649 56.162 23.6847 52.2616 19.9808 48.9447C15.7677 45.1717 11.2407 45.5521 7.41534 41.3936C3.46436 37.0985 0.86681 34.0623 0.480667 28.0339C-0.075814 19.3461 5.80005 13.9385 13.0125 8.16641C20.8143 1.92272 36.9711 0.504488 36.9711 0.504488Z"
              fill={color}
              fillOpacity="0.26"
            />
          </svg>
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="card-icon-circle"
          >
            <ellipse
              cx="24.4098"
              cy="24.627"
              rx="24.3238"
              ry="24.2332"
              fill={color}
            />
          </svg>
          <img src={icon} alt="Icon" className={className} />
        </div>
      </div>
      <div className="card-container-info">
        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
        {!wppIcon && (
          <>
            <div className="custom-card-info">
              <img className="days-icon" src={dayIcon} alt="Day Icon" />
              <p className="card-description">{days}</p>
            </div>
            <div className="custom-card-info">
              <img className="horary-icon" src={relojIcon} alt="Reloj Icon" />
              <p className="card-description">{horary}</p>
            </div>
            <div className="custom-card-info">
              <img className="place-icon" src={placeIcon} alt="Place Icon" />
              <p className="card-description">{place}</p>
            </div>
          </>
        )}
        {wppIcon && (
          <>
            <div className="custom-card-info">
              <img className="wpp-icon" src={wppIcon} alt="Place Icon" />
              <p className="card-description">{wppText}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
