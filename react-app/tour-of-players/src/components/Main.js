import React, {Component} from 'react';
import List from './List';

//let players=['Dhoni','Virat','Shikhar','Raina','Rohit'];
//let cities=['Bangalore','Chennai','Mumbai','Hyderabad','Pune'];
class Main extends Component {
    constructor(){
        super();
        this.state={
            players:['Dhoni','Virat','Shikhar','Raina','Rohit'],
            cities:['Bangalore','Chennai','Mumbai','Hyderabad','Pune']
        }
        this.removePlayer = this.removePlayer.bind(this);
    }

    removePlayer(player){
        console.log('came inside the logUser method of Main component....');
        console.log(this.state);
        this.setState((state)=>({
                players:state.players.filter((passedPlayer)=> passedPlayer !== player )
        }));

    }
    render(){
        return (
            <div className="container" >
                    <List values={this.state.players} removePlayer={this.removePlayer}/>
            </div>
        )
    }
}

export default Main;