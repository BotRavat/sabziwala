import React from "react";
import  ReactDOM  from "react";
import "./homepage.css";
import HomepageHero from "../../components/homepageHero/HomepageHero";
import Featured from "../../components/featured/Featured";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";

export default function Homepage()
{
    return(
        <>
        <HomepageHero/>
        <Featured/>
        <Testimonial/>
        <Footer/>
        
    </>
    )
}
