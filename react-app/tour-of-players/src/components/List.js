import React, {Component} from 'react';

let players=['Dhoni','Virat','Shikhar','Raina','Rohit']

let style={
    width:'20%'
}
class List extends Component{
    constructor(){super()}

    render(){
        return (
                    <div className="card" style={style}>
                    {this.props.values.map((value, index) => (
                        <div key={index}>
                            <div className="card-body">
                            <h5 className="card-title">{value}</h5>
                            <a href="#" className="btn btn-primary" onClick={() => this.props.log(value)}>Details</a>
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
