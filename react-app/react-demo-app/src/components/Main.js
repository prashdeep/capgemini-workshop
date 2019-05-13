import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component{
    constructor(){
        super();
        this.state={
            players:[
                {
                    id:0,
                    name:'Dhoni'
                },
                {
                    id:1,
                    name:'Virat'
                },
                {
                    id:2,
                    name:'Rohit'
                }
            ]
        }
        this.removePlayer = this.removePlayer.bind(this);
    }

    removePlayer(player){
        this.setState((state)=>({
            players:state.players.filter(play => play.id !== player.id)
        }))
    }
    render(){
        return (
            <div>
               <Title/>
               <List players={this.state.players} onDelete={this.removePlayer}/>
            </div>
            )
        
        }
}

export default Main;