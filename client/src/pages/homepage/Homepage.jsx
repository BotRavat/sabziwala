import React from "react";
import  ReactDOM  from "react";
import "./homepage.css";
import HomepageHero from "../../components/homepageHero/HomepageHero";
import IntroComponent from "../../components/introcomponent/IntroComponent";
import ProductCategory from "../../components/productCategory/ProductCateogry";

export default function Homepage()
{
    return(
        <>
        <HomepageHero/>
        <IntroComponent/>
        <ProductCategory/>
        </>
    )
}
