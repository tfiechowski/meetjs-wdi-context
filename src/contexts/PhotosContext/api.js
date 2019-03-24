import photos from "./apiData";
console.log("photos ", photos);

export default {
  fetchPhotos: () => {
    return photos;
  }
};
