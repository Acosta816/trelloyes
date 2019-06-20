import React, {Component} from 'react';
import ReactDOM from 'react-dom';





function Ager(age){
    if(typeof(age) !== "number"){
        return 'numbers only please :)'
    }
    else if(age < 0){
        age = 0;
    }
    return age +1;
};

export default Ager;