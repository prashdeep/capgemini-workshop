import React, {Component} from 'react';

let players=['Dhoni','Virat','Shikhar','Raina','Rohit']

class List extends Component{
    constructor(){super()}

    render(){
        return (
            <ul>
              <li>{ this.props.values.map((value, index)=> <li key={index}> {value}</li>)}</li>
           </ul>
        ) 
    }
}
/*
let calculateAge = function(){
    console.log('');
}*/

//export function calculateAge;
export default List;
