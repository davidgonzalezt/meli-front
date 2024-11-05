import { memo, ReactNode } from "react";
import { Item } from "../../clients/getProductDetails";
import { formatCurrency } from "../../utils";
import "./Detail.scss";

interface Detail extends Omit<Item, "description"> {
  description: ReactNode;
}

const Detail: React.FC<Detail> = ({ title, price, picture, description }) => {
  return (
    <article className="product-detail">
      <div className="product-detail-container">
        <figure className="product-image">
          <img
            src={picture || "/placeholder.jpg"}
            loading="lazy"
            alt={`Imagen de ${title}`}
          />
        </figure>
        <section className="product-info">
          <span className="product-condition">Nuevo - 234 vendidos</span>
          <h1 className="product-title">{title}</h1>
          <p className="product-price">
            {formatCurrency(price.amount, price.currency)}
          </p>
          <button className="buy-button">Comprar</button>
        </section>
      </div>
      <section className="product-description">
        <h2>Descripción del producto</h2>
        {description}
      </section>
    </article>
  );
};

export default memo(Detail);
