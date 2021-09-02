import { makeStyles } from '@material-ui/core';
// override material ui theme
const useStyles = makeStyles({
  root: {
    borderRadius: '.3rem',
    height: '3rem',
    display: 'flex',
  },

  inputBase: {
    height: '3rem',
    fontSize: '1.5rem',
    flex: 1,
    paddingRight: '1rem',
    paddingLeft: '1rem',
  },
});

export default useStyles;
