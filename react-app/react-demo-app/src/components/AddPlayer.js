import React,{Component} from 'react';

class AddPlayer extends Component{

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let name = event.target.elements.firstname.value;
        this.props.onAddPlayer(name);
    }
    render(){
        return (
            <div>
                <h1>Add Player</h1>
                <form onSubmit={this.handleSubmit}>
                      First Name
                      <input type="text" className="form-control" name="firstname" placeholder="Enter Name"/>
                      <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPlayer;