import React, { Component } from 'react';

require('../styles/app.css');

class ImageGallery extends Component {
  render() {
    const images = [];
    return (
      <div className="image-gallery">
        <h1 className="image-gallery__title">Bildegalleri</h1>
        <div className="thumbnails">{images}</div>
      </div>
    );
  }
}

export default ImageGallery;
