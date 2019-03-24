import React from "react";

export default function PhotosList({ photos, fetchPhotos, theme }) {
  const className = `photo-${theme}`;

  return (
    <div>
      {photos.map(photo => (
        <div key={photo.id} className={className}>
          {photo.title}
        </div>
      ))}

      <button onClick={fetchPhotos}>Fetch more photos</button>
    </div>
  );
}
