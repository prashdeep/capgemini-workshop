import React, {Component} from 'react';
import List from './List';
import axios from 'axios';

//let players=['Dhoni','Virat','Shikhar','Raina','Rohit'];
//let cities=['Bangalore','Chennai','Mumbai','Hyderabad','Pune'];
class Main extends Component {
    constructor(){
        super();
        this.state={
            players:[]
        }
        this.removePlayer = this.removePlayer.bind(this);
    }

    removePlayer(player){
        console.log('came inside the logUser method of Main component....');
        console.log(this.state);
        this.setState((state)=>({
                players:state.players.filter((passedPlayer)=> passedPlayer.id !== player.id )
        }));
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({players: response.data})
        })
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