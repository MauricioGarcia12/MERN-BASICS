import React, { Component } from 'react'
import axios from 'axios';
export default class CreateUser extends Component {

    //creating users
    state={
        users: [],
        username:''
    }

    async componentDidMount(){
        //Using Axios to get the users
      const res =  await  axios.get('http://localhost:4000/api/users');
    
      this.setState({users: res.data});

    }
    //event when you type in the input
    onChangeUserName = (e)=>{
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card cardbody">
                        <h3>Create New User</h3>
                        <form>
                            <div className="formgroup">

                                <input type="text"
                                className="form-control" 
                                onChange={this.onChangeUserName} />
                            </div>

                        </form>
                    </div>

                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        
                        {
                            //mapping all the users from backend
                            this.state.users.map(user=>
                                <li className="list-group-item list-group-item-action" key={user.id}>
                                    {user.username}
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
