import React, {Component} from 'react';
import styles from './Slideshow.css';

const calculateIndex = (index, length) => {
  if (index < 0) {
    return length - 1;
  } else if (index >= (length - 1)) {
    return 0;
  } else {
    return index;
  }
};

export class Slideshow extends Component {
  render () {
    const {
      loading,
      errorText,
      currentImageSrc,
      currentImageIndex,
      changeSlide,
      imagesLength,
      sortImages
    } = this.props;

    return (
      <div className={styles.main}>
        <div
          className={styles.slide}
          style={
            {backgroundImage: `url('${currentImageSrc}')`}
          }
        />

        <div className={styles.messages}>
          {loading && 'Loading... Please wait'}
        </div>
        {errorText &&
          <div className={styles.messages}>{errorText}</div>
        }
        <button
          className={styles.sortButton1}
          onClick={() => sortImages('ASC')}
        >Sort Asc</button>
        <button
          className={styles.sortButton2}
          onClick={() => sortImages('DESC')}
        >Sort Desc</button>
        <button
          className={styles.prevButton}
          onClick={() => changeSlide(calculateIndex(currentImageIndex - 1, imagesLength))}
        >Prev</button>
        <button
          className={styles.nextButton}
          onClick={() => changeSlide(calculateIndex(currentImageIndex + 1, imagesLength))}
        >Next</button>
      </div>
    )
  }
}
