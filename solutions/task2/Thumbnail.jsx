import React, { Component, PropTypes } from 'react';

class Thumbnail extends Component {
  render() {
    const { thumb, title, alt } = this.props;
    return (
      <div className="thumbnail">
        <button className="thumbnail__select-button">
         Forhåndsvis
        </button>
        <div className="thumbnail__content">
          <div className="thumbnail__image">
            <img src={thumb} alt={alt} />
          </div>
          <div className="thumbnail__image-info">
            <div className="thumbnail__size">{title}</div>
          </div>
        </div>
      </div>
    );
  }
}

Thumbnail.propTypes = {
  thumb: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
};

export default Thumbnail;
