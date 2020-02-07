import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import { idVideo } from '../../constants';
import './ModalsVideo.scss';

class ModalsVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <ModalVideo channel="youtube" isOpen={isOpen} videoId={idVideo} onClose={() => this.setState({ isOpen: false })} />
        <button type="button" className="btn-modal" onClick={this.openModal}>Voir La Video Explicative</button>
        <hr />
      </div>
    );
  }
}

export default ModalsVideo;
