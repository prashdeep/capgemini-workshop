import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import List,{calculateAge} from './components/List';
import Main from './components/Main';
import {BrowserRouter} from 'react-router-dom';
/*
const liItems = players.map(
        (player,index)=>
      
       <li key={index}> {player}</li>
     )
 const list = <ul>{liItems}</ul>
 */                   

/*ReactDOM.render(players.map((player,index)=> 
            React.createElement('li',{key:index}, player)
        ), 
            document.getElementById('root'));
*/

//let players=['Dhoni','Virat','Shikhar','Raina','Rohit'];
//let cities=['Bangalore','Chennai','Mumbai','Hyderabad','Pune'];

ReactDOM.render(
    //<Main players={players} cities={cities} />,
    <BrowserRouter><Main/></BrowserRouter> ,
    document.getElementById('root'));
