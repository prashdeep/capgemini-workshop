import React, {Component} from 'react';
import List from './List';


class Main extends Component {
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
                    <List values={this.props.players} log={this.logUser}/>
            </div>
        )
    }
}

export default Main;