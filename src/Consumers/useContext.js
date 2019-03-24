import React, { useContext } from "react";
import PhotosList from "../components/PhotoList";
import PhotosContext from "../contexts/PhotosContext";

export default function PhotoListUseContext() {
  const { photos, fetchPhotos } = useContext(PhotosContext);

  return <PhotosList photos={photos} fetchPhotos={fetchPhotos} />;
}
