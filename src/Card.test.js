import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';



describe('Test Suite for Card.js', () => {

    it('Smoke: Card.js renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Snapshot#1: Card renders as expected', () => {
        const cardJson = renderer.create(<Card />).toJSON();
        expect(cardJson).toMatchSnapshot();
    });

});