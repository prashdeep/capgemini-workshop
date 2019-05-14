import React from 'react';
import ReactDOM from 'react-dom';
import Comp from './components/List';

let players=['Dhoni','Virat','Shikhar','Raina','Rohit']

const liItems = players.map(
        (player,index)=>
      
       <li key={index}> {player}</li>
     )
 const list = <ul>{liItems}</ul>
                    

/*ReactDOM.render(players.map((player,index)=> 
            React.createElement('li',{key:index}, player)
        ), 
            document.getElementById('root'));
*/

ReactDOM.render(<Comp/>, document.getElementById('root'));
