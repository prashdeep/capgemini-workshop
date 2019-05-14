import React, {Component} from 'react';
import List from './List';
import Title from './Title';
import AddPlayer from './AddPlayer';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import PlayerList from './PlayerList';

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

   addPlayer(player){
    this.setState((state)=>({
        players:state.players.concat([player])
    }))
   }

    removePlayer(player){
        this.setState((state)=>({
            players:state.players.filter(play => play.id !== player.id)
        }))
    }
    render(){
        return (
            <div>
                <Route exact path="/" render={()=> (
                <div>
                    <Link className="btn btn-success" to="/AddPlayer">Add Player</Link>
                    <Title/>
                    <PlayerList/>
                    <List players={this.state.players} onDelete={this.removePlayer}/>
                </div>
                )}/>
                <Route path="/AddPlayer" render={ ({history})=>(
                    <div>
                        <h1>Hello world!!</h1>
                        <AddPlayer onAddPlayer={(player)=>{
                           // this.addPlayer(player);
                            history.push('/')
                        }}/>
                    </div>
                )}/>
                
                
            </div>
            )
        
        }
}

export default Main;