import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  headerTitle: {
    letterSpacing: '0.5rem',
    marginLeft: '1rem',
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    /* override material ui */
    padding: '0px',
  },

  headerOptionContainer: {
    width: '5rem',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },

  tcSticks: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  sideStick: {
    height: '0.5rem',
    width: '2rem',
  },

  middleStick: {
    height: '0.5rem',
    width: '3rem',
    backgroundColor: '#ecebeb',
    marginTop: '0.2rem',
    marginBottom: '0.2rem',
  },

  topStick: {
    background: 'linear-gradient(90deg, #c3f24b 50%, #58dacb 100%)',
  },

  bottomStick: {
    background: 'linear-gradient(270deg, #09d1e1 20%, #2f92c3 100%)',
  },

  themeButton: {
    color: '#fff',
  },

  paper: {
    position: 'absolute',
    width: '20rem',
    height: '20rem',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '2rem',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto',
  },

  buttonModal: {
    marginTop: '0.5rem',
  },
}));

export default useStyle;
