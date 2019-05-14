import React, {Component} from 'react';
import List from './List';
import axios from 'axios';
import '../styles/style.css';
import AddPlayer from './AddPlayer';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

//let players=['Dhoni','Virat','Shikhar','Raina','Rohit'];
//let cities=['Bangalore','Chennai','Mumbai','Hyderabad','Pune'];
class Main extends Component {
    constructor(){
        super();
        this.state={
            players:[]
        }
        this.removePlayer = this.removePlayer.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
    }

    removePlayer(player){
        console.log('came inside the logUser method of Main component....');
        console.log(this.state);
        this.setState((state)=>({
                players:state.players.filter((passedPlayer)=> passedPlayer.id !== player.id )
        }));
    }

    addPlayer(player){
        console.log('came inside the add player method');
        console.log(this);
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({players: response.data})
        })
    }

    componentWillMount(){
        console.log('Component will be destroyed ....')
    }
    
    render(){
        return (
            <div className="container" >
                <Route exact path="/" render={()=>(
                    <div className="container">
                       <div className='align'>
                            <Link className="btn btn-success btn-lg align-center" to="/AddPlayer">Add Player</Link>
                        </div>
                        <List values={this.state.players} removePlayer={this.removePlayer}/>
                    </div>    
                )}/>
                <Route path="/AddPlayer" render ={()=>(
                    <AddPlayer/>
                )}/>
                 
            </div>
        )
    }
}

export default Main;