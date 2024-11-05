import "./ItemProduct.scss";
import { formatCurrency } from "../../utils";
import { useNavigate } from "react-router-dom";

interface ItemProductProps {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

const ItemProduct: React.FC<ItemProductProps> = ({
  picture,
  price,
  title,
  id,
}) => {
  const priceAmount = formatCurrency(price.amount, price.currency);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/items/${id}`);
  };

  return (
    <article className="item-container" role="button" onClick={handleNavigate}>
      <figure className="img-container">
        <img alt={`Imagen de ${title}`} src={picture} loading="lazy" />
      </figure>
      <section className="item-info-container">
        <div className="item-info">
          <p className="item-price">{priceAmount}</p>
          <h2 className="item-title">{title}</h2>
        </div>
      </section>
    </article>
  );
};

export default ItemProduct;
