import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Ager from './Ager';
import Renderer from 'react-test-renderer';



describe('Test suite for Ager.js', () => {

    it('Smoke: Render Ager.js without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Ager />, div);

        ReactDOM.unmountComponentAtNode(div);
    });    


    it('TestCase#1: Receives positive number age and adds 1', () => {
        const outCome = Ager(5);
        expect(outCome).toBe(6);
    });

    it('TestCase#2: Turns negative age into 0 then adds 1', ()=> {
        const outCome = Ager(-5);
        expect(outCome).toEqual(1);
    });

    it('TestCase#3: Throws error for any input typeOf OTHER than "number"', () => {
        const outComeString = Ager("garbage");
        const outComeBool = Ager(false);
        expect(outComeString).toBe('numbers only please :)'); //Is it ok to do 2 test cases that are similar into one unit test?
        expect(outComeBool).toBe('numbers only please :)');
    });

    

} );