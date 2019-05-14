import React, {Component} from 'react';
import List from './List';
class Main extends Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
            <List values={this.props.players}/>
            <List values={this.props.cities}/>
            </div>
        )
    }
}

export default Main;