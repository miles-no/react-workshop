import React, { Component } from 'react';
import Thumbnail from './Thumbnail.jsx';
import ImageDetail from './ImageDetail.jsx';
import imageArr from '../data/mock';

require('../styles/app.css');

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: null,
    };
  }

  render() {
    const images = imageArr.map((image, idx) => {
      return <Thumbnail {...image} key={idx} />;
    });
    return (
      <div className="image-gallery">
        <h1 className="image-gallery__title">Bildegalleri</h1>
        { this.state.preview ? <ImageDetail {...this.state.preview} /> : null }
        <div className="thumbnails">{images}</div>
      </div>
    );
  }
}

module.exports = ImageGallery;
