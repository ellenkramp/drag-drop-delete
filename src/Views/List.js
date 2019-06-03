import React from 'react';
import Item from '../Components/Item';

class List extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ],
  }

  deleteItem = (id) => {
    this.setState(prevState => {
      let items = prevState.items;
      const index = items.findIndex(item => item.id === id);
      items.splice(index, 1);
      return { items };
    });
  }

  render() {
    const { items } = this.state;
    return (
      items.map(item =>
      <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id) } />
      )
    );
  }
}
export default List;