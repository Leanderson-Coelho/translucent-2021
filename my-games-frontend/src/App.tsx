import { CssBaseline } from '@material-ui/core';
import React from 'react';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </div>
  );
}

export default App;
