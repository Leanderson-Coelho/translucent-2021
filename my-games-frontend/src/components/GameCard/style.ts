import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
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
    flex: 2,
  },

  cardContent: {
    flex: 3,
  },

  cardContentNotes: {
    textAlign: 'justify',
    marginBottom: '0.3rem',
  },

  cardFooter: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemSpacing: {
    padding: '0.5rem',
  },

  itemSpacingFooter: {
    paddingRight: '0.5rem',
    paddingLeft: '0.5rem',
  },
}));

export default useStyle;
