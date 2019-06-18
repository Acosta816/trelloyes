import React from 'react';
import './Card.css';
//title and content will be passed in from the List gateway



function Card(props) {

    
        return (
            <div className="Card">
                <button type='button'>
                    delete
                </button>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
            </div>
        );
    }




export default Card;