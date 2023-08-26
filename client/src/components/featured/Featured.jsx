import React from "react";
import  ReactDOM  from "react";
import "./featured.css";
export default function Featured()
{
    return(
        <>
     <section className="featured-products" id="products">
    <h2 className="featured-title">Featured Products</h2>

    <p className="product-list-heading">Fresh from Farm</p>

    <div className="featured-product-list">

      <div className="product-item">
        <img src="assets/images/imgv10.jpg" alt="Product Name"/>
        <h3 className="product-name">Fresh Tomato</h3>
        <p className="product-description">Juicy and vibrant, the perfect burst of flavor for your dishes</p>
       <div>
          <p className="product-price"><span className="product-card-detail-mrp">₹70.00</span>₹50.00</p>
          <button className="btn-add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="product-item">
        <img src="assets/images/imgv21.jpg" alt="Product Name"/>
        <h3 className="product-name">Blue Barries</h3>
        <p className="product-description">Nature's little superfood, packed with sweetness and antioxidantss</p>
        <div>
          <p className="product-price"><span className="product-card-detail-mrp">₹70.00</span>₹50.00</p>
          <button className="btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="product-item">
        <img src="assets/images/imgv20.jpg" alt="Product Name"/>
        <h3 className="product-name">Fresh Corn</h3>
        <p className="product-description">Sweet and succulent kernels, the essence of summer on your plate</p>
        <div >
          <p className="product-price"><span className="product-card-detail-mrp">₹70.00</span>₹50.00</p>
          <button className="btn-add-to-cart">Add to Cart</button>
        </div>
      </div>

      <div className="product-item">
        <img src="assets/images/imgv23.jpg" alt="Product Name"/>
        <h3 className="product-name">Green Beans</h3>
        <p className="product-description">Crunchy and fresh, elevate your stir-fries and sides with these green gems</p>
        <div >
          <p className="product-price"><span className="product-card-detail-mrp">₹70.00</span>₹50.00</p>
          <button className="btn-add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>

    <a href="" className="btn-view-all">View All</a>
  </section>
        </>
    )
}
