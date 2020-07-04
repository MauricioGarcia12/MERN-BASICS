import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {BrowserRouter as Switch, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NoteList from './components/NoteList';

function App() {
  return (
  
    <Switch>
      <Navigation/>

      <div className="container p-4">
        <Route  path="/" exact  component={NoteList} />
        <Route path="/edit/:id" component={CreateNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Switch>
  );
}

export default App;
