import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  TextField,
  MenuItem,
  Button,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import useStyle from './style';
import clsx from 'clsx';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import TranslateIcon from '@material-ui/icons/Translate';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../redux/theme/actionCreators';
import Modal from '@material-ui/core/Modal';
import useGlobalStyle from '../../config/theme/globalStyle';
import i18n from '../../config/i18n';
import LocalStorageService from '../../services/localStorage';
import { changeLocation } from '../../redux/location/actionCreators';

const Header = () => {
  const style = useStyle();
  const globalStyle = useGlobalStyle();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [userLocale, setUserLocale] = useState(
    LocalStorageService.getItem('locale'),
  );

  const dispatchChangeTheme = () => {
    dispatch(changeTheme());
  };

  useEffect(() => {
    console.log('userLocale', userLocale);
  }, [userLocale]);

  const confirmLocale = () => {
    LocalStorageService.setItem('locale', userLocale);
    dispatch(changeLocation(userLocale));
    // i18n.fallbacks = userLocale;
    // router.go(0);
  };

  return (
    <AppBar position='fixed'>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <div className={style.paper}>
          <FormControl fullWidth>
            <FormLabel>{i18n.t('config.alterLocale')}</FormLabel>
            <TextField
              className={globalStyle.selectAndDate}
              select
              variant='outlined'
              value={userLocale}
              onChange={(e) => setUserLocale(e.target.value)}
            >
              <MenuItem value='en-CA'>English Canada</MenuItem>
              <MenuItem value='fr-CA'>Canada Français</MenuItem>
              <MenuItem value='pt-BR'>Português Brasil</MenuItem>
            </TextField>
          </FormControl>
          <Button
            className={style.buttonModal}
            color='secondary'
            variant='contained'
            onClick={confirmLocale}
          >
            {i18n.t('config.confirmButton')}
          </Button>
        </div>
      </Modal>
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
              <InvertColorsIcon className={style.themeButton} />
            </Button>
          </div>
          <div>
            <Button onClick={() => setShowModal(true)}>
              <TranslateIcon className={style.themeButton} />
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
