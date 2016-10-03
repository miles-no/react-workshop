import React, { Component } from 'react';
import Thumbnail from './Thumbnail.jsx';
import imageArr from '../data/mock';

require('../styles/app.css');

class ImageGallery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const images = imageArr.map((image, idx) => {
      return <Thumbnail {...image} key={idx} />;
    });
    return (
      <div className="image-gallery">
        <h1 className="image-gallery__title">Bildegalleri</h1>
        <div className="thumbnails">{images}</div>
      </div>
    );
  }
}

module.exports = ImageGallery;
