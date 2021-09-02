import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import useStyle from './style';
import clsx from 'clsx';

const Header = () => {
  const style = useStyle();

  return (
    <AppBar position='fixed'>
      <Toolbar classes={{ root: style.headerContainer }}>
        <h2 className={style.headerTitle}>My games</h2>
        <div className={style.headerOptionContainer}>
          <div className={style.tcSticks}>
            <div className={clsx(style.sideStick, style.topStick)} />
            <div className={style.middleStick} />
            <div className={clsx(style.sideStick, style.bottomStick)} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
