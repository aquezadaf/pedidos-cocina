// @flow
import React, { Component } from "react";

export default class MenuRestaurante extends Component {
  props: {
    platosMenu: Array<string>,
    solicitarMenuRestaurante: () => {}
  }

  componentDidMount() {
    this.props.solicitarMenuRestaurante();
  }

  render() {
    const { platosMenu } = this.props;
    return (
      <div>
        <ul>
          {platosMenu.map((platoMenu) => (
            <li key={platoMenu}>
              {platoMenu}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
