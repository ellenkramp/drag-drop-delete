import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import List from './Views/List';
import Target from './Components/Target';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="list">
          <List />
        </div>
        <Target />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
