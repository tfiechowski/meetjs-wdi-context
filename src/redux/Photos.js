import api from "../contexts/PhotosContext/api";

export function addPhotos(photos) {
  return {
    type: "photos/ADD_PHOTOS",
    payload: {
      photos
    }
  };
}

export function fetchPhotos() {
  return async dispatch => {
    const photos = await api.fetchPhotos();
    dispatch(addPhotos(photos));
  };
}

function getInitialState() {
  return {
    photos: []
  };
}

export default function photosReducer(state = getInitialState(), action) {
  const { type, payload } = action;
  switch (type) {
    case "photos/ADD_PHOTOS":
      return Object.assign({}, state, {
        photos: [...state.photos, payload.photos]
      });
    default:
      return state;
  }
}
