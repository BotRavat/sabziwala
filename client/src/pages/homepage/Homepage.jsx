import React from "react";
import ReactDOM from "react";
import "./homepage.css";
import HomepageHero from "../../components/homepageHero/HomepageHero";
import Featured from "../../components/featured/Featured";
import IntroComponent from "../../components/introcomponent/IntroComponent";
import ProductCategory from "../../components/productCategory/ProductCateogry";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";
import Card1 from "../../components/cards/Card1";
import CardData from "../../Sdata/CardData";

export default function Homepage() {
    const arr = [1, 2, 3, 4];
  return (
    <>
      <HomepageHero />
      <Featured />
      <IntroComponent />
      <ProductCategory />
      <p class="product-list-heading" style={{ textAlign: " center" }}>
        Discount on selected Products
      </p>

      <div className="featured-product-list">
        <div className="product-item">
          <img src="assets/productImage/1.png" alt="Product Name" />
        </div>
        <div className=" product-item">
          <img src="assets/productImage/2.png" alt="Product Name" />
        </div>
        <div className=" product-item">
          <img src="assets/productImage/3.png" alt="Product Name" />
        </div>
        <div className=" product-item">
          <img src="assets/productImage/4.png" alt="Product Name" />
        </div>
      </div>


      <div class="small-container">
        <div class=" product-list">
          <p class="product-list-heading">Vegetables</p>
          <div class="product-list-row row">
            <div className="product-container">
              {CardData.map((card) => (
                <Card1 cardDetail={card} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Testimonial />
      <Footer />
    </>
  );
}
