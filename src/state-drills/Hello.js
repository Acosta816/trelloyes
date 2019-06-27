import React from 'react';





class Hello extends React.Component {

    state = {
        who: "World"
    }


  handleClick = (e)=> {
        console.log("pooopers");
        this.setState({
            who: e.target.innerText
        })
    }

    render(){

        return (

            <div>
                <h1>Hello, {this.state.who}</h1>
                <button onClick={ this.handleClick }>David</button>
                <button onClick={ this.handleClick }>Lani</button>
                <button onClick={ this.handleClick }>Lobo</button>
            </div>
        )
    }
}

export default Hello;