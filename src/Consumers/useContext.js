import React, { useContext } from "react";
import PhotosList from "../components/PhotoList";
import PhotosContext from "../contexts/PhotosContext";
import ThemeContext from "../contexts/ThemeContext";

export default function PhotoListUseContext() {
  const { photos, fetchPhotos } = useContext(PhotosContext);
  const { theme } = useContext(ThemeContext);

  return <PhotosList photos={photos} fetchPhotos={fetchPhotos} theme={theme} />;
}
