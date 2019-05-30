import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class List extends React.Component {
  render() {
    return (
      <div>
        List
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend(List));