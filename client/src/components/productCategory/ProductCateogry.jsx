import React from "react";
import "./productCategory.css";
import CardData from "../../Sdata/CardData";
import Card1 from "../cards/Card1";

export default function ProductCategory() {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <div class="small-container">
        <div class=" product-list">
          <p class="product-list-heading">Under ₹100</p>
          <div class="product-list-row row">
            <div className="product-container">
              {CardData.map((card) => (
                <Card1 cardDetail={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
