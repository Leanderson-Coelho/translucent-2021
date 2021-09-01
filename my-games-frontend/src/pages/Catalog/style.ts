import { makeStyles } from '@material-ui/core';
// override material ui theme
const useStyles = makeStyles({
  floatingButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '2rem',
  },
});

export default useStyles;
