import React, { PropTypes } from 'react';

const ImageDetail = (props) => {
  const { alt, src, title } = props;
  return (
    <div className="image-preview">
      <h2>{title}</h2>
      <img alt={alt} src={src} />
    </div>
  );
};

ImageDetail.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};

module.exports = ImageDetail;
