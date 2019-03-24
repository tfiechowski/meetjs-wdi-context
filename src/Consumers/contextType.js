import React, { Component } from "react";
import PhotosList from "../components/PhotoList";
import PhotosContext from "../contexts/PhotosContext";

export default class PhotoListContextType extends Component {
  static contextType = PhotosContext;

  render() {
    const { photos, fetchPhotos } = this.context;

    return <PhotosList photos={photos} fetchPhotos={fetchPhotos} />;
  }
}
