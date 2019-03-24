import React from "react";

export default function PhotosList({ photos, fetchPhotos }) {
  return (
    <div>
      {photos.map(photo => (
        <div key={photo.id}>{photo.title}</div>
      ))}

      <button onClick={fetchPhotos}>Fetch more photos</button>
    </div>
  );
}
