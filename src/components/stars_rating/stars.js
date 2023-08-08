import "./stars.css";

export default function StarRating({ stars, count }) {
  // Máxima cantidad de estrellas
  const maxStars = 5;

  // Obtenemos el valor completo
  const starPercentage = (stars / maxStars) * 100;

  // Redondeamos el resultado si es decimal
  const starPercentageRounded = Math.round(starPercentage);

  // Creamos el estilo para que las estrellas amarillas
  // se vean según el número que recibimos.
  const StarStyles = () => {
    return {
      width: starPercentageRounded + "%",
    };
  };

  return (
    <div className="stars-and-count" >
      <div className="stars-gray">
        <div className="stars-yellow" style={StarStyles()}></div>
      </div>
      <p className="count" >{count}</p>
    </div>
  );
}