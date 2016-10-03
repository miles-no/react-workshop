import React, { PropTypes } from 'react';

const ImageDetail = (props) => {
  const { alt, src } = props;
  return (
    <div className="image-preview">
      <img alt={alt} src={src} />
    </div>
  );
};

ImageDetail.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

module.exports = ImageDetail;
