import React from "react";
import PhotosList from "../components/PhotoList";
import { ContextConsumer } from "../contexts";

export default function PhotoListContextConsumer() {
  return (
    <ContextConsumer>
      {({ photos: { photos, fetchPhotos }, theme: { theme } }) => (
        <PhotosList photos={photos} fetchPhotos={fetchPhotos} theme={theme} />
      )}
    </ContextConsumer>
  );
}
