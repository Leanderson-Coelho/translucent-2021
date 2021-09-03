import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  floatingButton: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: '2rem',
  },

  cardsContainer: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },

  item: {
    height: '22rem',
  },
});

export default useStyles;
