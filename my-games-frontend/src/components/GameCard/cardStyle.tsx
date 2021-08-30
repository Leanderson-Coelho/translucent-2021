import { makeStyles } from '@material-ui/core';
// override material ui theme
const useCardStyle = makeStyles((theme) => ({
  root: {
    borderRadius: '0 0 0.3rem 0.3rem',
    height: '20rem',
    display: 'flex',
    flexDirection: 'column',
  },

  cardHeader: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.dark,
    borderRadius: 0,
    fontWeight: 'bold',
    fontSize: '1rem',
    textAlign: 'justify',
  },
}));

export default useCardStyle;
