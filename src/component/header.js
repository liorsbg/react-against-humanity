import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import __ from '../lang';

export default class Header extends Component {
  render() {
    const { onSideBar = () => {}, showSideBar } = this.props;
    return (
      <div id='header'>
        <div className='content'>
          <div className='left'>
            <i
              className={classNames('hamburger', { open: showSideBar })}
              onClick={onSideBar}
            />
            <h1 className='title'>
              {__('GameLobbyTitle')}
            </h1>
          </div>
          <div className='center'>

          </div>
          <div className='right'>
            나가기
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onSideBar: PropTypes.func,
  showSideBar: PropTypes.bool
};