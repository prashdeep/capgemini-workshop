import React, {Component} from 'react';

class List extends Component{
    render(){
        return (
            <div className="row">
                <h1>Beautiful Cities!!</h1>
        {this.props.players.map((player,index) => {
         return ( <div className="card" style={styles} key={index}>
            <div className="card-body">
            <p>lorem dsfsdf sdfsdf sfdsf dsfsf </p>
              <p className="card-text">{player.name}</p>
              <button className="btn btn-danger" onClick={()=>{
                  this.props.onDelete(player)
              }}>Delete</button>
            </div>
          </div>)
         })}
            </div>
        )
    }
}

export default List;