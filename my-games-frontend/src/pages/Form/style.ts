/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { makeStyles, Select, TextField } from '@material-ui/core';
import { createStyles, withStyles } from '@material-ui/styles';

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

  select: {
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
}));

const OutlinedFieldTheme = withStyles((theme) =>
  createStyles({
    root: {
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
  }),
)(TextField);

const SelectTheme = withStyles((theme) =>
  createStyles({
    root: {
      '&:focus ': {
        color:
          theme.palette.type === 'dark'
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
      },
    },
  }),
)(Select);

export { OutlinedFieldTheme, SelectTheme };
export default useStyle;
