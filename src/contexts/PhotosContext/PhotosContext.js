
import React, { Component, createContext } from "react";

const Context = createContext({});

export class PhotosProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;

