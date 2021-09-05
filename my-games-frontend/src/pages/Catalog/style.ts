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

  loading: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    margin: 'auto',
  },

  search: {
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
