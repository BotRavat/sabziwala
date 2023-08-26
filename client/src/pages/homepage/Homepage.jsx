import React from "react";
import  ReactDOM  from "react";
import "./homepage.css";
import HomepageHero from "../../components/homepageHero/HomepageHero";
import Featured from "../../components/featured/Featured";
import IntroComponent from "../../components/introcomponent/IntroComponent";
import ProductCategory from "../../components/productCategory/ProductCateogry";

export default function Homepage()
{
    return(
        <>
        <HomepageHero/>
        <Featured/>
        <IntroComponent/>
        <ProductCategory/>
        
        </>
    )
}
