import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import useStyle from './style';
import clsx from 'clsx';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/theme/actionCreators';

const Header = () => {
  const style = useStyle();
  const dispatch = useDispatch();

  const dispatchChangeTheme = () => {
    dispatch(changeTheme());
  };

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
          <div>
            <Button onClick={dispatchChangeTheme}>
              <InvertColorsIcon
                className={style.themeButton}
                color='secondary'
              />
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
