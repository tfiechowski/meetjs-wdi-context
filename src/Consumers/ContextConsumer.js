import React from "react";
import PhotosList from "../components/PhotoList";
import { ContextConsumer } from "../contexts";

export default function PhotoListContextConsumer() {
  return (
    <ContextConsumer>
      {({ photos: { photos, fetchPhotos } }) => (
        <PhotosList photos={photos} fetchPhotos={fetchPhotos} />
      )}
    </ContextConsumer>
  );
}
