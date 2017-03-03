import React, { Component } from 'react';
import Thumbnail from './Thumbnail.jsx';
import ImageDetail from './ImageDetail.jsx';
import imageArr from '../data/mock';

require('../styles/app.css');

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      preview: imageArr[0],
    };
  }

  onClick(image) {
    this.setState({ preview: { src: image.src, alt: image.alt, title: image.title } });
  }

  render() {
    const images = imageArr.map((image, idx) => {
      return <Thumbnail {...image} key={idx} onClick={this.onClick} />;
    });
    return (
      <div className="image-gallery">
        <h1 className="image-gallery__title">Bildegalleri</h1>
        <ImageDetail {...this.state.preview} />
        <div className="thumbnails">{images}</div>
      </div>
    );
  }
}

export default ImageGallery;
