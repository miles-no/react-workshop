import React, { Component, PropTypes } from 'react';

class ImageDetail extends Component {
  constructor(props) {
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.state = {
      editMode: false,
    };
  }

  onEditClick() {
    this.setState({ editMode: true });
  }

  onBlur() {
    this.setState({ editMode: false });
  }

  onChange(event) {
    this.props.onTitleChange(event.target.value);
  }

  render() {
    const { alt, src } = this.props;
    return (
      <div className="image-preview">
        <div>
          {this.state.editMode
          ? <div>
            <input value={this.props.title} onChange={this.onChange} onBlur={this.onBlur} />
          </div>
          : <h2 onClick={this.onEditClick}>{this.props.title}</h2>}
          <img alt={alt} src={src} />
        </div>
      </div>
    );
  }
}

ImageDetail.propTypes = {
  title: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  onTitleChange: PropTypes.func.isRequired,
};

export default ImageDetail;
