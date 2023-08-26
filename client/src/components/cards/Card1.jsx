import { Link, useNavigate } from "react-router-dom";
import "./card1.css";

export default function Card1({ cardDetail }) {
  const navigate = useNavigate();
  return (
    <div className="cardWrapper">
      <div className="product-item">
        <img src={cardDetail.productImage} alt="Product image" />
        <p
          className="product-name"
          onClick={() => navigate(`/product/${cardDetail.id}`)}
        >
          {cardDetail.productName}
        </p>
        <p className="product-description">{cardDetail.productDescription}</p>
        <div className="card-bottom">
          <p className="product-price">
            <span className="product-card-detail-mrp">
              <s style={{ color: "black" }}>₹{cardDetail.productMrp}</s>
            </span>
            ₹{cardDetail.productPrice}
          </p>
          <button className="btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
