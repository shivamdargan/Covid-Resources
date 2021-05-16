import React, {useEffect} from 'react';

import './assets/css/style.css'
import './assets/vendor/animate.css/animate.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/aos/aos.css'
import logo2 from './assets/img/logo2.png'
import shivam from './assets/img/Shivam.jpg'
import devanshi from "./assets/img/devanshi.png"
import naman from "./assets/img/naman.jpg"
import harshit from "./assets/img/harshit.png"
import riya from "./assets/img/Riya.jpg"


import AOS from 'aos';
const Team = () => {
    AOS.init();
    return(
<div>
    <header id="header" className="fixed-top d-flex align-items-center ">
            <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                    <a href="/home"><img src={logo2} alt="" className="img-fluid" /> </a>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a className="active" href="/team">Team</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
    </header>

    <main id="main">
        <section className="breadcrumbs">
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
            <h2>Our Team</h2>
            <ol>
                <li><a href="/home">Home</a></li>
                <li>Our Team</li>
            </ol>
            </div>
        </div>
        </section>
        <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div className="container">

            <div className="row">

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                <div className="member-img display-image">
                    <img src={shivam} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>Shivam Dargan</h4>
                    <span>Team Member</span>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                <div className="member-img display-image">
                    <img src= {devanshi} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>Devanshi Saini</h4>
                    <span>Team Member</span>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                <div className="member-img display-image">
                    <img src= {naman} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>Naman Khuranna</h4>
                    <span>Team Member</span>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                <div className="member-img display-image">
                    <img src= {harshit} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>Harshit Taneja</h4>
                    <span>Team Member</span>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="member">
                <div className="member-img display-image">
                    <img src= {riya} className="img-fluid" alt=""/>
                    <div className="social">
                    <a href=""><i className="bi bi-twitter"></i></a>
                    <a href=""><i className="bi bi-facebook"></i></a>
                    <a href=""><i className="bi bi-instagram"></i></a>
                    <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div className="member-info">
                    <h4>Riya Gupta</h4>
                    <span>Team Member</span>
                </div>
                </div>
            </div>
            </div>

        </div>
        </section>

    </main>


    <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</div>
);
}
export default Team;