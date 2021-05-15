import React from 'react';
import Button from './Button';

const CityButtons = ({selectedCity, updateCityHandler}) =>{
    const cityNames = ["Delhi"
                ,"Pune"
                ,"Bengaluru"
                ,"Mumbai"
                ,"Chennai"
                ,"Kolkata"
                ,"Chandigarh"
                ,"Ahemdabad"
                ,"Lucknow"
                ,"Dehradun"
                ,"Hyedrabad"
                ,"Bhopal"]
    let cityNamesElements=[];
    for (let i=0; i<cityNames.length; i++){
        if(selectedCity===cityNames[i]){
            cityNamesElements = cityNamesElements.concat(<button type="button" className="btn btn-primary req"  onClick={() => updateCityHandler(cityNames[i])}>{cityNames[i]}</button>);
        }
        else {
            cityNamesElements = cityNamesElements.concat(<button type="button" className="btn btn-outline-primary req"  onClick={() => updateCityHandler(cityNames[i])}>{cityNames[i]}</button>);
        }
        
    }
    return (
        <div>
            {cityNamesElements}
        </div>
    )
}

export default CityButtons;