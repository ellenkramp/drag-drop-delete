import React from 'react';
import { DropTarget } from 'react-dnd';

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class Target extends React.Component {
  render() {
    const { connectDropTarget, hovered } = this.props;
    const backgroundColor = hovered ? 'lightgreen' : 'white';
    return connectDropTarget(
      <div className="target" style={{ backgroundColor }}>Target</div>
    );
  }
}

export default DropTarget('item', {}, collect)(Target);