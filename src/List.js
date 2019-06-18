import React from 'react';
import Card from './Card';
import './List.css';

/*accepts this.props.headerand this.props.cards array 
(an array of card objs with their own data)
These props are passed in from the App in the form of <List>*/

function List(props) {
    return (
        <section className='List'>
          <header className='List-header'>
            <h2>{props.header}</h2>
          </header>
          <div className='List-cards'>
            {/* The cards prop is being passed in from App.js */}
            {props.cards.map((card) =>
              <Card
                key={card.id}
                title={card.title}
                content={card.content}
              />
            )}


            <button
              type='button'
              className='List-add-button'
            >
              + Add Random Card
            </button>
          </div>
          
        </section>
      )
}

export default List;