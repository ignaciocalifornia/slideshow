import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchJsonp from 'fetch-jsonp';
import {
  getInstagramImagesRequest,
  getInstagramImagesSuccess,
  getInstagramImagesError
} from './action-creators';

import Slideshow from './components/Slideshow';

const CLIENT_ID = 'f35906fd79dc4624a1cc3d1402bd1690';
const REDIRECT_URL = 'http://localhost:8080';
const URI = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=token`;

class App extends Component {
  componentDidMount () {
    const {
      location: {
        hash
      },
      getImages
    } = this.props;

    if (!hash) {
      window.location = URI;
    } else {
      const token = hash.substring(hash.indexOf('=') + 1);
      getImages(token);
    }

  }
  render () {
    return (
      <Slideshow />
    );
  }
}

App = connect(
  ({routing}) => ({
    location
  }),
  (dispatch) => ({
    getImages (token) {
      dispatch(getInstagramImagesRequest());
      fetchJsonp(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`
      ).then(function(response) {
        return response.json();
      }).then(function(json) {
        dispatch(getInstagramImagesSuccess(json))
      }).catch(function() {
        dispatch(getInstagramImagesError())
      });
    }
  })
)(App);

export default App;
