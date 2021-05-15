import React from 'react';
import Button from './Button';

const KeywordButtons = ({selectedKeyword, updateKeywordHandler}) =>{
    const keywordNames = ["Favipiravir"
        ,"Food"
        ,"Remdesivir"
        ,"Oxygen"
        ,"Ventilator"
        ,"Plasma"
        ,"Tocilizumab"
        ,"ICU"
        ,"Beds"]
    let keywordNamesElements = [];
    for (let i=0; i<keywordNames.length; i++){
        if(selectedKeyword===keywordNames[i]){
            keywordNamesElements = keywordNamesElements.concat(<button type="button" className="btn btn-primary req"  onClick={() => updateKeywordHandler(keywordNames[i])}>{keywordNames[i]}</button>);
        }
        else {
            keywordNamesElements = keywordNamesElements.concat(<button type="button" className="btn btn-outline-primary req"  onClick={() => updateKeywordHandler(keywordNames[i])}>{keywordNames[i]}</button>);
        }
    }
    return (
        <div>
            {keywordNamesElements}
        </div>
    )
}

export default KeywordButtons;