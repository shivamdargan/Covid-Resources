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

import AOS from 'aos';
const Contact = () => {
    AOS.init();
    return(
<div>
  <header id="header" className="fixed-top d-flex align-items-center ">
    <div className="container d-flex justify-content-between align-items-center">

      <div className="logo">
        <a href="/home"><img src={logo2} alt="" className="img-fluid"/></a>
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="" href="/home">Home</a></li>
          <li><a  href="/about">About</a></li>
          <li><a href="/team">Team</a></li>
          <li><a className="active" href="/contact">Contact Us</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

  <main id="main">
    <section className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>Contact</h2>
          <ol>
            <li><a href="/home">Home</a></li>
            <li>Contact</li>
          </ol>
        </div>

      </div>
    </section>

    <section className="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
      <div className="container">

        <div className="row">

          <div className="col-lg-6">

            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>Our Address</h3>
                  <p>Thapar Institue Of Engineering And Technology, Patiala, India <br/>147001 </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bx bx-envelope"></i>
                  <h3>Email Us</h3>
                  <p>helpdesk@covires.com<br/>enquire@covires.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box">
                  <i className="bx bx-phone-call"></i>
                  <h3>Call Us</h3>
                  <p>+91 9781 8889 32<br/>+91 9980 7897 33</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    <section className="map mt-2">
      <div className="container-fluid p-0">
      <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Thapar%20University%20Of%20Engineering%20And%20Technology+(Covi-Res)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameborder="0" style={{border : '0'}} allowfullscreen=""></iframe>
      </div>
    </section>

  </main>
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      </div>  
    );
}

export default Contact;