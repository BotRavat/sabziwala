import React from "react";
import  ReactDOM  from "react";
import "./homepageHero.css";
export default function HomepageHero()
{
    return(
        <>
           <section className="hero">
    <div className="hero-bg"></div>

    <div className="hero-overlay"></div>

    <div className="hero-content">
      <h1 className="hero-headline">Sabzi wala Delivered to Your Doorstep</h1>

      <p className="hero-subheadline">Order the freshest vegetables and fruits from local farms. Easy, convenient, and
        eco-friendly!</p>

      <a href="" className="hero-button">Start Shopping</a>
    </div>
  </section>


        </>
    )
}
