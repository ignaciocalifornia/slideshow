import {
  CHANGE_SLIDE,
  SORT_IMAGES
} from '../../constants';

import {createAction} from 'redux-actions';

const changeSlideAction = createAction(CHANGE_SLIDE);
const sortImagesAction = createAction(SORT_IMAGES);

export const changeSlide = (index) => changeSlideAction(index);
export const sortImages = (method) => [sortImagesAction(method), changeSlideAction(0)];
