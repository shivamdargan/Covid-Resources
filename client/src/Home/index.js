import {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";  
// import Spinner from 'react-bootstrap/Spinner'  

import axios from 'axios';
import './assets/css/style.css'
import './assets/vendor/animate.css/animate.min.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/vendor/aos/aos.css'

import logo2 from './assets/img/logo2.png'

import Tweets from './tweets'
import CityButtons from './CityButtons';
import KeywordButtons from './KeywordButtons';

function Home(){
    let value=0;
    let loaders;
    const [selectedCity, setSelectedCity] = useState();
    const [selectedKeyword, setSelectedKeyword] = useState();
    const [tweetIds, setTweetIds] = useState([]);
    const [buttonClicksCount,setButtonClicksCount] = useState(0);
    const [nextToken, setNextToken] = useState();
    const clearFeed = () => {
        setTweetIds([]);
        console.log("Fired");
    }
    const fetchtweets = () => {
        if(!(selectedKeyword===undefined || selectedCity===undefined))
        {
            console.log(buttonClicksCount);
            let api_url = "http://localhost:3001/api/tweets/"+selectedKeyword+"%20"+selectedCity+"%20Verified%20Leads%20Available"
            if(nextToken !== undefined){
                api_url +=  "/"+nextToken
            }
            else{
                api_url +=  "/null"
            }
            
            axios.get(api_url).then(res => {
            tweets = (res.data.data);
            const meta = res.data.meta;
            let next_token;
            if(meta !== undefined){
                next_token = meta.next_token;
                setNextToken(next_token);
            }
            let tweetIdsExtracted = [];
            if (tweets === undefined){
                emptyTweetsMessage= <p>Unable to get any tweets with the selected filters</p>
            }
            else{
                for (let i=0; i<tweets.length; i++){
                    tweetIdsExtracted = tweetIdsExtracted.concat(tweets[i].id);
                }
                console.log(tweetIdsExtracted);
                setTweetIds(tweetIds.concat(tweetIdsExtracted));
            }
            });
        }

    }
    const updateCityHandler = (updatedCity) => {
        setSelectedCity(updatedCity);
    }

    const updateKeywordHandler = (updatedKeyword) => {
        setSelectedKeyword(updatedKeyword);
    }
    let tweets = [];
    let emptyTweetsMessage;
    useEffect(() => {
        setButtonClicksCount(buttonClicksCount+1);
        clearFeed();
        fetchtweets();
    }, [selectedCity, selectedKeyword])

    let loadMoreButton;
    if(tweetIds.length!==0){
        loadMoreButton = <button className="button" onClick={()=>fetchtweets()}><span>Load More</span></button>
        emptyTweetsMessage = undefined;
    }
    else {
        loadMoreButton = undefined;
    }
    return (
        <div>
        <header id="header" className="fixed-top d-flex align-items-center header-transparent header-scrolled">
            <div className="container d-flex justify-content-between align-items-center">

            <div className="logo">
                <a href="/home"><img src={logo2} alt="" className="img-fluid"/></a>
            </div>

            <nav id="navbar" className="navbar">
                <ul>
                <li><a className="active" href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/team">Team</a></li>
                <li><a href="/contact">Contact Us</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            </div>
        </header>
        <section id="hero" className="d-flex justify-cntent-center align-items-center">
          <div id="heroCarousel" className="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
      
            <div className="carousel-item active">
              <div className="carousel-container">
                <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Covi-Res</span></h2>
                <p className="animate__animated animate__fadeInUp">State Of The Art Covid resources Verified Directory Presented
                  To You</p>
                <a href="/about" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
              </div>
            </div>
          </div>
        </section>
        
        <div className="container">
            <div className="row">
                <div className="col">
                <div className="container">
                    <div className="col-md-10">
                    <div className="flex ml-1" style={{paddingLeft : '20px'}}>
                        <svg className="mt-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z"
                            fill="#4F46EF"></path>
                        <path
                            d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
                            fill="#4F46EF" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                        <h3 className="font-weight-bold animate__animated animate__fadeInDown" style={{paddingLeft : '20px'}}>Choose Your City</h3>
                    </div>
                    <div className="col animate__animated animate__fadeInDown" style={{top:"1040px"}}>                 
                        <CityButtons selectedCity={selectedCity} updateCityHandler={(updatedCity) => updateCityHandler(updatedCity)} />
                    </div>
                    </div>
                </div>
                </div>
                <div className="col">
                <div className="container look">
                    <div className="col-md-10">
                    <div className="flex ml-1" style={{paddingLeft : '40px'}}>
                        <svg className="mt-0.5" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.5C9 16.5 15 13.5 15 9V3.75L9 1.5L3 3.75V9C3 13.5 9 16.5 9 16.5Z" fill="#4F46EF"></path><path d="M9 6V10" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 8H11" stroke="white" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <h3 className="font-weight-bold animate__animated animate__fadeInDown" style={{paddingLeft : '20px'}}>Choose Resources</h3>
                    </div>
                    <div className="col animate__animated animate__fadeInDown">
                        <KeywordButtons selectedKeyword={selectedKeyword} updateKeywordHandler={(updatedKeyword) => updateKeywordHandler(updatedKeyword)} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 ">     
                    <Tweets tweetIds={tweetIds} />
                    {emptyTweetsMessage}
                    {loadMoreButton}
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
        </div>

        
    )
}

export default Home;