import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import './ScrollToTop.scss';

class ScrollToTop extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="ScrollToTop">
        <i role="button" tabIndex="0" onKeyDown={this.scrollToTop} onClick={this.scrollToTop} className="fa fa-arrow-circle-up" style={{ fontSize: '50px' }} />
      </div>
    );
  }
}

export default ScrollToTop;
