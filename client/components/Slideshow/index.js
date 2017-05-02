import React from 'react';
import {connect}from 'react-redux';
import {Slideshow} from './Slideshow';
import {
  changeSlide,
  sortImages
} from './action-creators';

const mapStateToProps = ({slideshow}) => ({
  loading: slideshow.loading,
  errorText: slideshow.errorText,
  currentImageSrc: slideshow.currentImageSrc,
  currentImageIndex: slideshow.currentImageIndex,
  imagesLength: slideshow.imagesLength,
});

const mapDispatchToProps = (dispatch) => ({
  changeSlide (index) {
    dispatch(changeSlide(index));
  },
  sortImages (method) {
    dispatch(sortImages(method));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Slideshow);

