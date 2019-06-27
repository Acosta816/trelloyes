import React from 'react';
import './Card.css';




class Card extends React.Component {

    render(){

        return(
            <div className='Card'>
                <h3>{this.props.titleProp}</h3>
                <p>{this.props.contentProp}</p>
            </div>
        )
    }
}


export default Card;