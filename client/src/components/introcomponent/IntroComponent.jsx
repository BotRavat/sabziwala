import "./introcomponent.css";

export default function IntroComponent() {
  return (
    <>
      <div class="intro-text">
        <p>
          Welcome to Sabzi wala , your one-stop destination for all things
          fresh, nutritious, and green! We are thrilled to bring you the finest
          selection of premium vegetables, handpicked with love and care from
          local farmers and growers, directly delivered to you at your door
          step.
        </p>
      </div>

      <div class="featured-products">
        <p class="product-list-heading" style={{ textAlign: "center" }}>
          OFFERS ZONE
        </p>
      </div>
      <div class="featured-product-list">
        <div class="product-item">
          <img src="assets/images/D1.png" />
        </div>
        <div class="product-item">
          <img src="assets/images/D2.png" />
        </div>

        <div class="product-item">
          <img src="assets/images/D3.png" />
        </div>
        <div class="product-item">
          <img src="assets/images/D4.png" />
        </div>
      </div>
    </>
  );
}
