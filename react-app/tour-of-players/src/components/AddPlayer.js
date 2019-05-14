import React,{Component} from 'react';

class AddPlayer extends Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
      event.preventDefault();
      let user={};

      user.name = event.target.name.value;
      user.username = event.target.username.value;
      user.email = event.target.email.value;
      this.props.addPlayer(user);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" placeholder="Add Name" name="name"/>
                </div>
                <div>
                    <input type="text" placeholder="Add Username" name="username"/>
                </div>
                <div>
                    <input type="email" placeholder="Enter email address" name="email"/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        )
    }
}

export default AddPlayer;