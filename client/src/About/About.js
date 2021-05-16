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
import covidChart from './assets/img/coronavirus-data-explorer.png'

import AOS from 'aos';
import '@srexi/purecounterjs';

const About = () => {
    AOS.init();

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://cdn.jsdelivr.net/npm/@srexi/purecounter.js/dist/purecounter_vanilla.js";
        script.async = false;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
      <div>
        <header id="header" className="fixed-top d-flex align-items-center ">
            <div className="container d-flex justify-content-between align-items-center">

            <div className="logo">
                <a href="/home"><img src={logo2} alt="" className="img-fluid" /> </a>
            </div>

            <nav id="navbar" className="navbar">
                <ul>
                <li><a className="" href="/home">Home</a></li>
                <li><a className="active" href="/about">About</a></li>
                <li><a href="/team">Team</a></li>
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
          <h2>About Us</h2>
          <ol>
            <li><a href="/home">Home</a></li>
            <li>About Us</li>
          </ol>
        </div>

      </div>
    </section>


    <section data-aos={'fade-up'} className="about" >
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src={covidChart} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <h4>Covi-Res: A one stop location for everyone who is looking for verified leads to prominent covid resources.</h4>
            <p className="fst-italic">
             <br /> We provide the tweets of the most verified covid resources based on your city. Our extensive verification process is that what sets us apart.Our real time verification algorithm uses a 4-step approach. The five steps involved in the process are:
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> Sorting based on the number of likes </li>
              <li><i className="bi bi-check2-circle"></i> Sorting based on the number of retweets</li>
            </ul>
            <p>
              Due to this extensive and effective 4 step approach, we update the sorted tweets every mili-second and hence provide the users with the most legitimate and verified information for all covid resources
            </p>
          </div>
        </div>

      </div>
    </section>

    <section className="facts section-bg" data-aos="fade-up">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="100000" data-purecounter-duration="2" className="purecounter"></span>
            <p><b>Users And Counting</b></p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="10000" className="purecounter">20</span>
            <p><b>Resources</b></p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="40" data-purecounter-duration="10000" className="purecounter"></span>
            <p><b>Cities</b></p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="50000" data-purecounter-duration="2" className="purecounter"></span>
            <p>People <b>Helped</b> So Far</p>
          </div>

        </div>

      </div>
    </section>
  </main>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      </div>  
    );
}

export default About;