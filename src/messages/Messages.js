import React, {Component} from 'react';
import './Messages.css';

/*let's explain const bubble. So here it's saying, if the expression "props.unread" is equal to false, 
then const bubble is <div id="wow"...</div>, ELSE const bubble = value of null (which is no value at all, 
therefore, nothing will display. The div will never be created either.)
WARNING: If you pass 0 into unread from the app, the expression will be false because in JS, 0  has a falsey value and is
parsed into a boolean false. Therefore the null section of the ternary operator will be called and bubble will equal null.
It still shows up on the React chrome-tools as a child, just has a value of null and so is not displayed obviously because it's never assigned a <tag />  */  
function Messages(props) {
    const bubble = props.unread ?
    <div  id="wow" className = "unread_count">{props.unread}</div> : null;

    return (
        <div className="messages">
            {props.name}
            {bubble}
        </div>
    );
}

export default Messages;