import React, { Component } from "react";
import { List } from "../components/List";
export default class GroceryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      newItem: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Grocery list</h1>
        <button onClick={this.addItem}>Add</button>
        <input
          type="text"
          onChange={e => {
            this.setState({ newItem: e.target.value });
          }}
          value={this.state.newItem}
        />
        <List
          list={this.state.list}
          customRendering={item => (
            <div>
              <div
                onClick={() => this.togglePurchase(item)}
                className={item.done ? "red" : ""}
              >
                <span>{item.name} </span>
                <span> {item.count} </span>
              </div>
              <span onClick={() => this.clearItem(item)}> X </span>
            </div>
          )}
        ></List>
      </div>
    );
  }

  addItem = () => {
    const newItem = { name: this.state.newItem, count: 1 };
    const itemIndex = this.checkIfExist(newItem, this.state.list);
    if (itemIndex !== -1) {
      const updatedItem = {
        name: this.state.newItem,
        count: this.state.list[itemIndex].count + 1
      };

      this.state.list[itemIndex] = updatedItem;

      this.setState({ list: this.state.list }, () => {
        this.setState({ newItem: "" });
      });
    } else {
      this.setState({ list: [...this.state.list, newItem] }, () => {
        this.setState({ newItem: "" });
      });
    }
  };

  togglePurchase = item => {
    const itemIndex = this.checkIfExist(item, this.state.list);
    if (itemIndex !== -1) {
      this.state.list[itemIndex].done = this.state.list[itemIndex].done
        ? false
        : true;

      this.setState({ list: this.state.list });
    }
  };

  clearItem = item => {
    const itemIndex = this.checkIfExist(item, this.state.list);
    console.log(item, itemIndex);
    if (itemIndex !== -1) {
      const newList = this.state.list;
      newList.splice(itemIndex, 1);
      console.log(newList);
      this.setState({ list: newList });
    }
  };

  checkIfExist = (obj, list) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === obj.name) {
        return i;
      }
    }

    return -1;
  };
}
