import PropTypes from "prop-types";
import React, { Component, createContext } from "react";
import api from "./api";

const Context = createContext({});

export class PhotosProviderInner extends Component {
  static propTypes = {
    api: PropTypes.object
  };

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
    const photos = await this.props.api.fetchPhotos();
    this.setState(state => ({ photos: [...state.photos, ...photos] }));
  };
}

export function PhotosProvider(props) {
  return <PhotosProviderInner api={api} {...props} />;
}

export default Context;
