import React from 'react';
import axios from 'axios';

export default class PlayerList extends React.Component{
    state = {
        players:[

        ]
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(response =>{
                this.setState({players:response.data})
            })
    }

    render(){
        return (
            <ul>
                {this.state.players.map((player, index) =><li key={index}>{player.name}</li> )   }
            </ul>
        )
    }
}