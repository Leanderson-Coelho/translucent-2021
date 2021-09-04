import React, { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import Routes from './Routes';
import useUpdateLocation from './hooks/useUpdateLocation';
import { changeBreadcrumb } from './redux/location/actionCreators';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const updateLocale = useUpdateLocation();

  useEffect(() => {
    dispatch(changeBreadcrumb());
  }, [updateLocale]);

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
