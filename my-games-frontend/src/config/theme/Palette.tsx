import React, { ReactElement } from 'react';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#182647',
    },
    secondary: {
      main: '#73EA8C',
    },
  },
});

interface Props {
  children: ReactElement
}

const Palette = (props: Props) => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
);

export default Palette;
