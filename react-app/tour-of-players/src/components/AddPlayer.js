import React,{Component} from 'react';

class AddPlayer extends Component {
    constructor(){super();}

    render(){
        return (
            <form>
                <div>
                <input type="text" placeholder="Add Player" name="player"/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default AddPlayer;