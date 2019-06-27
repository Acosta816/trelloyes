import React from 'react';


//accepts sectionsProp (array of objects containing 2 keys, title and content)

class Accordian extends React.Component {

    state = {
        currentSection: this.props.sectionsProp[0].content
    }

    handleClick=(e)=> {
        this.setState({
            currentSection: e.target.value
        })  
        
    }

    render(){

        return(
            <div>
                <ul>
                    {this.props.sectionsProp.map((bttn,index)=> {
                        return(
                            <li key={index}>
                                <button  onClick={this.handleClick} value={bttn.content} key={index}>{bttn.title}</button>
                                <p>{bttn.content === this.state.currentSection? bttn.content : null }</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Accordian;