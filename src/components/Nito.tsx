import "./Nito.css";

const Nito = () => {
  const handleRedirect = () => {
    window.open("https://nito-crespi.github.io/portfolio/", "_blank");
  };

  return (
    <div className="nito-crespi">
      <p className="nito-crespi__text">
        Desarrollador:{" "}
        <span className="nito-crespi__link" onClick={handleRedirect}>
          @Nito.Crespi
        </span>
      </p>
    </div>
  );
};

export default Nito;
