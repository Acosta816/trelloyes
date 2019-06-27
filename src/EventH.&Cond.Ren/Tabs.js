import React from 'react';


//accepts tabsProp (array of objects), each item in array has
//name and content keys



class Tabs extends React.Component {

    state = {
        currentTab: this.props.tabsProp[0].content
    }

    handleClick = (e)=> {
        console.log('testing event')
        this.setState({
            currentTab: e.target.value
        })
    }

    render(){

        return(
            <div>                       {/*NOTE: the second parameter in map() is index. This is super usefull because it represents the current index of each item that we are iterating over. We can use this for assigning keys to items */}
                {this.props.tabsProp.map((tab,index)=> {
                    return(
                        <button onClick={ this.handleClick } value={tab.content} key={index}>{tab.name}</button>
                    )
                    
                })}

                <div>
                    {this.props.tabsProp.length && this.state.currentTab}
                </div>
            </div>
        )
    }
}


export default Tabs;