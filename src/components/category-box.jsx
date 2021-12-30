export const Category = ({ title, icon, color, price, duration }) => {
  return (
    <figure className={`category-box ${color}`}>
      <figcaption>
        <div>
          <small> {title}</small>
          <h3>{price}</h3>
          <small>5% {duration}</small>
        </div>

        <span>{icon}</span>
      </figcaption>
    </figure>
  );
};
