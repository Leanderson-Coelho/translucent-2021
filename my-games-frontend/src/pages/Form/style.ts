/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  formContent: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '0.5rem',
    paddingBottom: '2rem',
  },

  backButton: {
    color: theme.palette.text.secondary,
  },

  inputsContainer: {
    padding: '1rem',
    // alignItems: 'center',
  },

  buttonsContainer: {
    paddingRight: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  formButtonCancel: {
    marginRight: '0.5rem',
  },

  selectAline: {
    alignSelf: 'flex-end',
  },

  checkboxAlign: {
    alignSelf: 'center',
  },

  checkbox: {
    '&$checked': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
  },

  checked: {},

  selectAndDate: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
  },

  outlinedFieldTheme: {
    '& label.Mui-focused': {
      color:
        theme.palette.type === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor:
          theme.palette.type === 'dark'
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
      },
    },
  },
}));

export default useStyle;
