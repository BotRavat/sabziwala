import React from "react";
import ReactDOM from "react";
import "./featured.css";
import Card1 from "../cards/Card1";
import CardData from "../../Sdata/CardData";
import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <>
      <section className="featured-products" id="products">
        <h2 className="featured-title">Featured Products</h2>
        {/* <p className="product-list-heading">Fresh from Farm</p> */}
        <div className="featured-product-list">
          <div className="productcard">
            <div className="product-container">
              {CardData.map((card,index) => (
               index<4 && <Card1 cardDetail={card} />
              ))}
            </div>
          </div>
        </div>
        <Link to="/all-products" className="btn-view-all">
          View All
        </Link>
      </section>
    </>
  );
}
