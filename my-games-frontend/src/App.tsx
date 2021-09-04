import React, { useEffect, useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import Routes from './Routes';
import i18n from './config/i18n';
import { useSelector } from 'react-redux';
import { RootState } from './redux';

function App() {
  const [updateLocale, setUpdateLocale] = useState();
  const locale = useSelector((state: RootState) => state.location.data);

  useEffect(() => {
    console.log('App locale', locale);
    i18n.locale = locale;
    setUpdateLocale(locale);
  }, [locale]);

  return (
    <div>
      {updateLocale && (
        <CssBaseline>
          <Routes />
        </CssBaseline>
      )}
    </div>
  );
}

export default App;
