import React, { Component } from 'react'
import axios from 'axios';
export default class CreateUser extends Component {

    //creating users
    state={
        users: [],
        username:''
    }


    async componentDidMount(){
        this.getUsers()

    }

     getUsers = async () =>{
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
    //event to create the user 
    onSubmit = async e =>{
           //cancel the state to refresh the page
           e.preventDefault();
        //Creating users with axios
         await axios.post('http://localhost:4000/api/users', {
            username:this.state.username
        })
        //cleaning the input value from the past user
        this.setState({username:''});
        //getting the users
        this.getUsers();
    }

    //method to delete user from backend
    deleteUser = async (id) =>{
        //deleting
         await axios.delete('http://localhost:4000/api/users/' + id);
         //getting the users from the new list 
         this.getUsers();

    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card cardbody">
                        <h3 className="p-1 text-center">Create New User</h3>
                        <form onSubmit={this.onSubmit} className="">
                            <div className="form-group p-2">

                                <input type="text m-1"
                                className="form-control p-2" 
                                value={this.state.username}
                                onChange={this.onChangeUserName} />
                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <button type="submit" className="btn btn-lg btn-primary">
                                    Save
                                </button>
                            </div>
                            
                        </form>
                    </div>

                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        
                        {
                            //mapping all the users from backend
                            //using an event sending the user id to the method on double click
                            this.state.users.map(user=>
                                <li className="list-group-item list-group-item-action" 
                                    key={user._id}
                                    onDoubleClick={() => this.deleteUser(user._id)}>
                                    {user.username}
                                </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
