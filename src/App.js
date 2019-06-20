import React from 'react';
import List from './List';
import './App.css';
import Messages from './messages/Messages';

//accepts just this.props.store object.

class App extends React.Component {

  static defaultProps = {
    store: {
      lists: [],
      cardDirectory: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
      <Messages name="Messages" unread={0} />
      <Messages name="Notifications" unread={10} />
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>

          {store.lists.map(list => (

            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.cardDirectory[id])} 
            />

          ))}

        </div>
      </main>
    );
  }

}

export default App;