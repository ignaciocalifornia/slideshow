import {
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR,
} from './constants';

import {createAction} from 'redux-actions';

const getImagesRequest = createAction(GET_IMAGES_REQUEST);
const getImagesSuccess = createAction(GET_IMAGES_SUCCESS);
const getImagesError = createAction(GET_IMAGES_ERROR);

export const getInstagramImagesRequest = () => getImagesRequest();
export const getInstagramImagesSuccess = (res) => getImagesSuccess(res);
export const getInstagramImagesError = () => getImagesError();
