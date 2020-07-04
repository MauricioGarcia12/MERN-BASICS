import React, { Component } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'

export default class NoteList extends Component {

    state={
        notes:[],

    }

     componentDidMount(){
      this.getNotes()
    }
    async getNotes(){
        const res = await axios.get('http://localhost:4000/api/notes');
        this.setState({notes: res.data.notes});
    }

    //method to delete note
    deleteNote = async(id)=>{
        await axios.delete('http://localhost:4000/api/notes/'+id);
        this.getNotes()
    }

    render() {
        return (
            <div className="row">
                {/**DEPENDING ON THE NOTES THE CARD SHOWS */}

                {
                    this.state.notes.map( note =>(
                        <div className= "col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header">
                                    <h5>{note.title}</h5>
                                </div>
                                <div className="card-body">
                                    <p>{note.content}</p>
                                    <p className="p-1 text-success">Author: {note.author}</p>
                                    <p className="text-primary">{format(note.date)} </p>
                                </div>
                                <div className="card-footer">
                                    <button onClick={()=>this.deleteNote(note._id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
