import React, {Component} from 'react';
import '../styles/style.css';

class List extends Component{
    constructor(){super()}

    render(){
        return (

                    <div className="row">
                    {this.props.values.map((player, index) => (
                        <div  className="card" key={player} className="card-item">
                            <div className="card-body">
                            <h5 className="card-title">{player}</h5>
                            <a href="#" className="btn btn-primary" onClick={() => this.props.removePlayer(player)}>Delete</a>
                        </div>
                    </div>
                    ))}
                        
                    </div>

        ) 
    }
}
/*
let calculateAge = function(){
    console.log('');
}*/

//export function calculateAge;
export default List;
