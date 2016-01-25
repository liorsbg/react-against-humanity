import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import __ from '../../lang';

export default class Header extends Component {
  render() {
    const { onSidebar = () => {}, showSidebar } = this.props;
    return (
      <div id='header'>
        <div className='content'>
          <div className='left'>
            <i
              className={classNames('hamburger', { open: showSidebar })}
              onClick={onSidebar}
            />
            <h1 className='title'>
              {__('GameLobbyTitle')}
            </h1>
          </div>
          <div className='center'>

          </div>
          <div className='right'>
            <Link to='/login'>{__('Login')}</Link>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onSidebar: PropTypes.func,
  showSidebar: PropTypes.bool
};
