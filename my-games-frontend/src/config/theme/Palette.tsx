import React, { ReactElement } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// eslint-disable-next-line no-unused-vars
const lightTheme = createTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#182647',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#73EA8C',
      dark: '#000',
    },
    background: {
      default: '#ECEBEB',
    },
    text: {
      primary: '#000',
      secondary: '#B8B8B8',
    },
  },
});

// eslint-disable-next-line no-unused-vars
const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#182647',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#73EA8C',
      dark: '#000',
    },
    // background: {
    //   default: '#ECEBEB',
    // },
    text: {
      primary: '#fff',
      secondary: '#B8B8B8',
    },
  },
});

interface Props {
  children: ReactElement;
}
const Palette = (props: Props) => (
  <ThemeProvider theme={lightTheme}>{props.children}</ThemeProvider>
);

export default Palette;
