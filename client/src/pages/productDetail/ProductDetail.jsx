import CardData from '../../Sdata/CardData';
import Card1 from '../../components/cards/Card1';
import './productDetail.css';

export default function ProductDetail(){
    return (
        <>
    <div className="product-detail">
      <div className="product-image">
        <img src="/assets/images/imgv20.jpg" alt="Product" />
      </div>
      <div className="product-info">
        <h2 className="product-name">Fresh Vegetable</h2>
        <p className="product-description">
          Juicy and vibrant, the perfect burst of flavor for your dishes.
        </p>
        <div className="product-prices">
          <p className="product-mrp">MRP: ₹100</p>
          <p className="product-price">Price: ₹50</p>
        </div>
        <p className="offer-text">Offer Available!</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
    <div class="small-container">
        <div class=" product-list">
          <p class="product-list-heading">Based on you interest</p>
          <div class="product-list-row row">
            <div className="product-container">
    {
        CardData.map((card)=><Card1 cardDetail={card}/>)
    }
    </div>
    </div>
    </div>
    </div>
    </>
    )
}