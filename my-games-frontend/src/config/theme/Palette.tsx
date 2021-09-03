/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
import React, { ReactElement } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { LIGHT_TYPE } from '../../redux/theme/themeReducer';

const overrides = {
  MuiCssBaseline: {
    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.4rem',
      },
      '*::-webkit-scrollbar-track': {
        background: '#182647',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: '#dbdbdb',
        borderRadius: '1rem',
      },
    },
  },
};

const lightTheme = createTheme({
  overrides,
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

const darkTheme = createTheme({
  overrides,
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
const Palette = (props: Props) => {
  const themeConfig = useSelector(
    (state: RootState) => state.theme.themeConfig,
  );
  return (
    <ThemeProvider theme={themeConfig === LIGHT_TYPE ? lightTheme : darkTheme}>
      {props.children}
    </ThemeProvider>
  );
};

export default Palette;
