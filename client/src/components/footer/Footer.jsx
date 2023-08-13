import React from "react";
import "./footer.css";




export default function Homepage()
{
    return(
        <>
<div className="footer">
        <div className="row">
            <div className="footer-col-1">
                <h3>Download Our App</h3>
                <p>Download app for ios and andriod mob</p>
                <div className="applogo">
                    <img src="assets/images/play-store.png" alt="some problem"/>
                    <img src="assets/images/app-store.png"  alt="some problem"/>
                </div>
            </div>
            <div className="footer-col-2">
            <div className="applogo1">
                <img src="logo/logo3.png" alt="some issue"/>
                </div>
                <p>Download app for ios and andriod mob</p>
            </div>
            <div className="footer-col-3">
                <h4>UseFul Links</h4>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy </li>
                    <li>Join Affliate</li>
                </ul>
                
            </div>
            <div className="footer-col-4">
                <h4>Folllow us</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter </li>
                    <li>Youtube</li>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="copyright">Copyright 2023-Sabjiwala</p>
    </div>

    </>
    )
}
