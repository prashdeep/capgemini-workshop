import React, {Component} from 'react';
import List from './List';

//let players=['Dhoni','Virat','Shikhar','Raina','Rohit'];
//let cities=['Bangalore','Chennai','Mumbai','Hyderabad','Pune'];
class Main extends Component {

    state={
        players:['Dhoni','Virat','Shikhar','Raina','Rohit'],
        cities:['Bangalore','Chennai','Mumbai','Hyderabad','Pune']
    }

    constructor(){
        super();
    }

    logUser(player){
        console.log('came inside the logUser method of Main component....');
        console.log(player)
    }
    render(){
        return (
            <div className="container" >
                    <List values={this.state.players} log={this.logUser}/>
            </div>
        )
    }
}

export default Main;