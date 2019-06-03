import React from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor, component) {
    if(!monitor.didDrop()) {
      return;
    }
    return props.handleDrop(props.item.id);
  }
}

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class Item extends React.Component {
  
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div className="item" style={{ opacity }}>
        {item.name}
      </div>
    )
  }
}

export default DragSource('item', itemSource, collect)(Item);