import  React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Renderer from 'react-test-renderer';
import Messages from './Messages';




describe('Test Suite for Messges.js', () => {

    it('Smoke: renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Messages unread={100} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Snapshot#1: renders UI as expected ', () => {
        const messagesJson = Renderer.create(<Messages name="Inbox" unread={100} />).toJSON();
        expect(messagesJson).toMatchSnapshot();
    });

    it('Snapshot#2: Renders UI as expected with unread={0}', () => {
        const messagesJson2 = Renderer.create(<Messages name="Mail" unread={0} />).toJSON();
        expect(messagesJson2).toMatchSnapshot();
    }); 


 /*Snapshot renders the component UI and turns it into JSON, 
 then compares that JSON-->( ..renderer.create(<.../>).toJSON() )  
 to a photo take prior that we have on file--> (.. .toMatchSnapshot().. )   
 and that's all it does! */
});