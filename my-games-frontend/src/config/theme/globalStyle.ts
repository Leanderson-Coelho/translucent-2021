import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
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
}));

export default useStyle;
