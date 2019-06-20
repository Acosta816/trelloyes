import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';



describe('Test Suite for List.js', () => {

    it('Smoke: Render <List /> without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<List  />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Snapshot: UI is rendered as expected', ()=> {
        const listJson = renderer.create(<List />).toJSON();
        expect(listJson).toMatchSnapshot();
    })

});