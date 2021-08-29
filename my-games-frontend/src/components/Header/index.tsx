import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import './style.css';

const Header = () => (
  <AppBar position='fixed' className='header'>
    <Toolbar classes={{ root: 'headerContainer' }}>
      <h2 className='headerTitle'>My games</h2>
      <div className='headerOptionContainer'>
        <div className='tcSticks'>
          <div className='sideStick topStick' />
          <div className='middleStick' />
          <div className='sideStick bottomStick' />
        </div>
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;
