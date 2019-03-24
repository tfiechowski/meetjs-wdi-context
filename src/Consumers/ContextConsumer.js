import React from "react";
import PhotosList from "../components/PhotoList";
import PhotosContext from "../contexts/PhotosContext";

export default function PhotoListContextConsumer() {
  return (
    <PhotosContext.Consumer>
      {({ photos, fetchPhotos }) => (
        <PhotosList photos={photos} fetchPhotos={fetchPhotos} />
      )}
    </PhotosContext.Consumer>
  );
}
