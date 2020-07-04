import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export default class CreateNote extends Component {

    state={
        users:[],
        userSelected:'',
        title:'',
        content:'',
        date: new Date()
    }
   async  componentDidMount(){
    //Getting the users
     const res=  await axios.get('http://localhost:4000/api/users')
        //returning the username of each user
     this.setState({users: res.data.map(user => user.username)})
    }
    // refreshing 
    onSubmit = (e) =>{
        console.log(this.state.title, this.state.content);
        e.preventDefault();
    }

    //method for the onchange depending on the name of the input we update the value
    onInputCachange = e =>{
        this.setState({
             [e.target.name]:e.target.value
        })
    }

    //Method for DatePicker to show the date selected in the input
    onChangeDate = date =>{
        this.setState({date})
    }


    render() {
        return (
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body">
                        <h4>Create a Note</h4>

                        {/**SELECT USER */}
                        <div className="form-group">
                            <select 
                            name="userSelected"
                            onChange={this.onInputCachange}
                            className="form-control">
                                {
                                    //mapping the state and showing the username to the frontend
                                    this.state.users.map(user =>
                                     <option key={user} value={user}>
                                         {user}

                                    </option>)

                                }
                            </select>
                        </div>

                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="Title"
                                name="title"
                                required
                                onChange={this.onInputCachange}
                                />
                        </div>

                        <div className="form-group">
                            <textarea 
                                name="content"
                                className="form-control"
                                placeholder="Content"
                                required
                                onChange={this.onInputCachange}
                                 >

                            </textarea>
                        </div>
                                {/**USING DATEPICKER TO CREATE A CALENDAR */}
                        <div className="form-group">
                            <DatePicker 
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            />
                        </div>

                        <form onSubmit={this.onSubmit}> 


                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            
        )
    }
}
