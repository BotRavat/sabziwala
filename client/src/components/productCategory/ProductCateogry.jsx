import React from "react";
import "./productCategory.css";

export default function ProductCategory() {
  const arr = [1, 2, 3, 4, 5, ]
  return (
    <>
      <div class="small-container">
        <div class=" product-list">
          <p class="product-list-heading">Under ₹100</p>
          <div class="product-list-row row">
            {arr.map((item) => (
              <div class="col4">
                <a href="proddetail.html">
                  <img src="assets/images/imgv20.jpg" />
                </a>
                <p>
                  Sweet and succulent kernels, the essence of summer on your
                  plate
                </p>
                <div class="product-card-detail">
                  <p>Fresh Corn</p>
                  <p class="product-card-detail-price">
                    <span class="product-card-detail-mrp">₹70.00</span>₹50.00
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
