import React from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import useStyle, { OutlinedFieldTheme } from './style';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  IconButton,
  Grid,
  Checkbox,
  MenuItem,
  TextField,
} from '@material-ui/core';

const Form = () => {
  const style = useStyle();
  // TODO i18n labels
  return (
    <HeaderContentTemplate>
      <div className={style.formContent}>
        <IconButton>
          <ArrowBackIcon classes={{ root: style.backButton }} />
        </IconButton>
        <Grid container spacing={3} className={style.inputsContainer}>
          <Grid item xs={12} sm={12}>
            <OutlinedFieldTheme
              autoFocus
              fullWidth
              label='Title'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>
              Completed
              <Checkbox
                classes={{ root: style.checkbox, checked: style.checked }}
              />
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={style.select}
              fullWidth
              type='date'
              variant='outlined'
              label='Console'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={style.select}
              fullWidth
              select
              variant='outlined'
              label='Console'
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <OutlinedFieldTheme fullWidth label='Outlined' variant='outlined' />
          </Grid>
          <Grid item xs={12} sm={12}>
            <OutlinedFieldTheme fullWidth label='Outlined' variant='outlined' />
          </Grid>
        </Grid>
      </div>
    </HeaderContentTemplate>
  );
};

export default Form;
