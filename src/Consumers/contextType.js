import React, { Component } from "react";
import PhotosList from "../components/PhotoList";
import PhotosContext from "../contexts/PhotosContext";

// Multiple contextTypes are not supported.
// https://github.com/facebook/react/issues/14005#issuecomment-435174098

export default class PhotoListContextType extends Component {
  static contextType = PhotosContext;

  render() {
    const { photos, fetchPhotos } = this.context;

    return <PhotosList photos={photos} fetchPhotos={fetchPhotos} />;
  }
}
