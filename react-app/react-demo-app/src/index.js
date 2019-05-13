import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css'

let cities = ['Bangalore','Chennai','Pune','Mumbai']
let listElement=(
    <div>
        <h1>Beautiful Cities!!</h1>
        <ul>
            {cities.map((city,index) => <li key={index}>{city}</li>)}
        </ul>
   </div>
)


ReactDOM.render(
    <Main/>, 
    document.getElementById('root')
    );



