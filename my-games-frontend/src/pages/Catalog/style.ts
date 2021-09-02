import { makeStyles } from '@material-ui/core';
// override material ui theme
const useStyles = makeStyles({
  floatingButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '2rem',
  },

  cardsContainer: {
    display: 'flex',
    marginTop: '1rem',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '1rem',
  },

  item: {
    width: '22rem',
    marginTop: '2rem',
  },
});

export default useStyles;
