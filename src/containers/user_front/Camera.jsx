import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { change } from 'redux-form';
import { connect } from 'react-redux';
import DeleteImg from '../../component/user_front/DeleteImg';

import './Camera.scss';

class Camera extends Component {
  constructor(props) {
    super(props);
    this.webcam = React.createRef();
    this.state = {
      takePicture: false,
      images: [],
      availableVideoInputs: [],
    };
  }

  componentDidMount() {
    const gotDevices = mediaDevices => new Promise((resolve, reject) => {
      const availableVideoInputs = [];
      mediaDevices.forEach((mediaDevice) => {
        if (mediaDevice.kind === 'videoinput') {
          availableVideoInputs.push({
            deviceId: mediaDevice.deviceId,
            label: mediaDevice.label,
          });
        }
      });

      if (availableVideoInputs.length > 0) {
        resolve(availableVideoInputs);
      } else {
        reject(new Error('ERR::NO_MEDIA_TO_STREAM'));
      }
    });

    navigator.mediaDevices.enumerateDevices()
      .then(gotDevices)
      .then(availableVideoInputs => this.setState({ availableVideoInputs }));
  }

  displayWebcam = () => {
    this.setState({
      takePicture: true,
    });
  }

  closeWebcam = () => {
    this.setState({
      takePicture: false,
    });
  }

  handleDelete = (fileName) => {
    const { images } = this.state;
    const imgs = images.filter(image => image.file.name !== fileName);
    this.setState({ images: imgs });
  }

  takePhoto = () => {
    const imageSrc = this.webcam.current.getScreenshot();
    fetch(imageSrc)
      .then(res => res.blob())
      .then((blob) => {
        const fileName = new Date();
        const file = new File([blob], `${fileName.getTime()}.jpg`);
        const { images } = { ...this.state };
        if (images.length < 3) {
          images.push({ file, imageSrc });
          this.setState({
            images,
          });
        }
        const { dispatch } = this.props;
        const long = images.length;
        dispatch(change('wastelandForm', `picture${long}`, images[long - 1].file));
      });
  }

  render() {
    const { images, takePicture } = this.state;
    const videoConstraints = {
      facingMode: 'environment',
    };

    return (
      <div className={`Camera ${takePicture ? 'open' : ''}`}>
        {
          takePicture
            ? (
              <div className="webcam">
                <div className="webcam-opt">
                  <p className="infos-webcam">
                    <span>{`${3 - images.length} photos disponible(s)`}</span>
                  </p>
                  <button type="button" onClick={this.closeWebcam}>
                    X
                  </button>
                </div>
                {
                  <Webcam
                    className="webcam-video"
                    audio={false}
                    ref={this.webcam}
                    screenshotFormat="image/jpeg"
                    screenshotQuality={1}
                    videoConstraints={videoConstraints}
                    width="100%"
                    height="10px"
                  />
                }
                <div className="webcam-button">
                  <button type="button" className="photo-button" disabled={(images.length === 3)} onClick={this.takePhoto}>
                    <i className="fa fa-camera" style={{ fontSize: '50px' }} />
                  </button>
                </div>
              </div>
            )
            : (
              <div className="explain-text">
                <button type="button" className="photo-button" onClick={this.displayWebcam}><i className="fa fa-camera" style={{ fontSize: '80px' }} /></button>
                <p>
                  Prends tes photos ! (3 photos maximum)
                </p>
              </div>
            )
        }
        <div className="images">
          {
            images.map((image, i) => (
              <DeleteImg
                key={i}
                image={image}
                handleDelete={this.handleDelete}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default connect()(Camera);
