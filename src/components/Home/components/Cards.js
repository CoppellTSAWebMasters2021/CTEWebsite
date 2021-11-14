import React from 'react'
import './css/Cards.css'

function Cards(props) {
    return (
        <div className="cards">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.des}</p>

            </div> 
        </div>
    );  
}

export default Cards;