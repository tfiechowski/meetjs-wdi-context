import React, { Component, createContext } from "react";
import api from "./api";

const Context = createContext({});

export class PhotosProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      fetchPhotos: this.fetchPhotos
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }

  fetchPhotos = async () => {
    const photos = await api.fetchPhotos();
    this.setState(state => ({ photos: [state.photos, ...photos] }));
  };
}

export default Context;
