import React, {Component} from 'react';
import List from './List';

//let players=['Dhoni','Virat','Shikhar','Raina','Rohit'];
//let cities=['Bangalore','Chennai','Mumbai','Hyderabad','Pune'];
class Main extends Component {
    constructor(){
        super();
        this.state={
            players:[ 
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz"
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                }

            ]
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
    render(){
        return (
            <div className="container" >
                    <List values={this.state.players} removePlayer={this.removePlayer}/>
            </div>
        )
    }
}

export default Main;