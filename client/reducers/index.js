import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
  CHANGE_SLIDE,
  SORT_IMAGES
} from '../constants';

const defaultState = {
  images: [],
  currentImageSrc: '',
  currentImageIndex: 0,
  errorText: '',
  loading: false,
  imagesLength: 0
};

const sortImages = ({images}, method) => {
  const sortedImages = images.slice(0);
  sortedImages.sort((a, b) => {
    if (method === 'ASC') {
      return a.created_time > b.created_time
        ? 1
        : -1;
    } else {
      return a.created_time < b.created_time
        ? 1
        : -1;
    }
  });

  return sortedImages;
};

export const slideshow = (state = defaultState, action) => {
  switch (action.type) {
    case GET_IMAGES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        errorText: ''
      });
    case GET_IMAGES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        images: action.payload.data && state.images.concat(action.payload.data),
        currentImageSrc: action.payload.data[0].images.standard_resolution.url,
        currentImageIndex: 0,
        imagesLength: action.payload.data.length
      });
    case GET_IMAGES_ERROR:
      return Object.assign({}, state, {
        loading: false,
        errorText: 'error loading images'
      });
    case CHANGE_SLIDE:
      const slideNumber = action.payload;
      return Object.assign({}, state, {
        currentImageSrc: state.images[slideNumber].images.standard_resolution.url,
        currentImageIndex: slideNumber
      });
    case SORT_IMAGES:
      return Object.assign({}, state, {
        images: sortImages(state, action.payload),
      });
    default:
      return state;
  }
};

