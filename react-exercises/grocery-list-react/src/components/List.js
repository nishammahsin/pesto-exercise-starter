import React, { Component } from "react";

export class List extends Component {
  render() {
    const { customRendering, list } = this.props;
    return (
      <div>
        <ul>
          {list.map(item => {
            return customRendering ? customRendering(item) : <li>item</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
