import React from 'react';
import Card from './Card';
import './List.css'

/* For each card in cardsProp, you will create a card and give it a key,
  a title, and a content prop that derive from the cardsProp given to you
  by App.js */
  //this.props.cardsProp use this array for map()
  //this.props.headerProp use this for header
class List extends React.Component{

  

  render(){

    console.log(this.props.headerProp);
    console.log(this.props.cardsProp);

    return(
      <section className="List">
        <header className="List-header">{this.props.headerProp}</header>

        <div className="List-cards">
          
          {
            this.props.cardsProp.map((card, index) => {
              return (
                <Card key={index} titleProp={card.title} contentProp={card.content} />
              )
              
            })
          }


        <button type='button' className='List-add-button'>+ Add Random Card</button>

        </div>
      </section>
    )
  }
}

export default List