import React, { Component } from 'react';
import Thumbnail from './Thumbnail.jsx';
import ImageDetail from './ImageDetail.jsx';
import imageArr from '../data/mock';

require('../styles/app.css');

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.state = {
      previewId: null,
      imageArr,
    };
  }

  onClick(id) {
    this.setState({ previewId: id });
  }

  onTitleChange(title) {
    const images = this.state.imageArr;
    const currentImg = this.state.imageArr[this.state.previewId];
    currentImg.title = title;
    images[this.state.previewId] = currentImg;
    this.setState({ imageArr: images });
  }

  render() {
    const images = this.state.imageArr.map((image, idx) => {
      return <Thumbnail {...image} key={idx} onClick={this.onClick} id={idx} />;
    });
    return (
      <div className="image-gallery">
        <h1 className="image-gallery__title">Bildegalleri</h1>
        {this.state.previewId ? <ImageDetail {...this.state.imageArr[this.state.previewId]} onTitleChange={this.onTitleChange} /> : null}
        <div className="thumbnails">{images}</div>
      </div>
    );
  }
}

export default ImageGallery;
