import React, { Component, createContext } from "react";

const Context = createContext({});

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
      toggle: this.toggle
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }

  toggle = () => {
    const theme = this.state.theme === "dark" ? "light" : "dark";
    this.setState({ theme });
  };
}

export default Context;
