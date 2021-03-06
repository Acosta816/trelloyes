import React from 'react';
import './App.css';
import List from './List';


//Accepts just 1 prop that is the store
//Should iterate over this.props.storeProp.lists array and make a <List/> for every item in there
//To access the the store we passed in from index.js as a prop, use this.props.storeProp
class App extends React.Component {


  renderCardsProp(cardIdsArray){
    /*create me an array filled with objects from props.storeProp.allCards whose key 
      matches the cardID from the array of cardIds that we passed into this function as cardIdsArray */
      const cardsPropVar = cardIdsArray.map(cardID=> {
        return(
          this.props.storeProp.allCards[cardID]
        )
      })

      return cardsPropVar;
  }


  render(){


    return (
      <main className="App">

        <header className="App-header">
          <h1>Trelloyes</h1>
        </header>

        <div className="App-list">    
        
        {
          this.props.storeProp.lists.map(list=> {
            
              return(
                <List key={list.id} headerProp={list.header} cardsProp={this.renderCardsProp(list.cardIds)} />
    
              )
            }
          )
        }
            
        </div>
        
      </main>
    )
  }
}


export default App;