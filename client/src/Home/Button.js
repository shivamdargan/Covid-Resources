import React from 'react';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'

const Button = ({text, isHighlighted, onClickHandler}) => {
    let button;
    if(isHighlighted){
        button = <button type="button" className="btn btn-primary req"  onClick={onClickHandler}>{text}</button>
    }
    else {
        button = <button type="button" className="btn btn-outline-primary req"  onClick={onClickHandler}>{text}</button>
    }
    console.log(button);
    return (
        <React.Fragment>
            {button}
        </React.Fragment>
    );
}

export default Button;