import React, { Component, PropTypes } from 'react';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    const { thumb, title, alt } = this.props;
    return (
      <div className="thumbnail">
        <button className="thumbnail__select-button" onClick={this.onClick}>
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
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default Thumbnail;
