import React from "react";
import  ReactDOM  from "react";
import "./testimonial.css";
export default function Testimonial()
{
    return(
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="stylesheet" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&family=Roboto:wght@100;300&display=swap"
        rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <div class="testimonial">
            <div class="small-container">
                <h3>Customers Review</h3>
                <div class="row">
                    <div class="col3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto laborum facilis ratione
                            doloribus quaerat maxime at perferendis hic recusandae.</p>
                            <div class="rating">
                                <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                            </div>
                            <img src="assets/images/user-1.png"/>
                            <h3>Pragya Roy</h3>
                    </div>
    
                    <div class="col3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto laborum facilis ratione
                            doloribus quaerat maxime at perferendis hic recusandae.</p>
                            <div class="rating">
                                <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                            </div>
                            <img src="assets/images/user-2.png"/>
                            <h3>AKshay Kumar</h3> 
                    </div>
    
                    <div class="col3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor iusto laborum facilis ratione
                            doloribus quaerat maxime at perferendis hic recusandae.</p>
                            <div class="rating">
                                <i class="fa fa-star"></i> 
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                            </div>
                            <img src="assets/images/user-3.png"/>
                            <h3>Nancy Dutt</h3>
                    </div>

                </div>
            </div>
            </div>
    </>
    )
}
