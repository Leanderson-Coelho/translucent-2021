import React, { ChangeEvent } from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import useStyle from './style';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  IconButton,
  Grid,
  Checkbox,
  MenuItem,
  TextField,
  Button,
  FormControl,
  FormLabel,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

const Form = () => {
  const style = useStyle();
  const router = useHistory();
  const validationSchema = yup.object({
    title: yup
      .string()
      .max(150, 'Maximun 150 characters')
      .required('Requereddd'),
    completed: yup.boolean(),
    completionDate: yup.date().when('completed', {
      is: true,
      then: yup.date().max(new Date(), 'The maximun date is Today').required(),
    }),
    console: yup.string().required('Requiredddd'),
    year: yup
      .date()
      .min(new Date('01-01-1970'), 'The minimum date is 01-01-1970')
      .required('Requiredddde'),
    notes: yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      title: '',
      completionDate: '',
      console: 'XBOX_ONE',
      year: '',
      notes: '',
      completed: false,
    },
    validationSchema,
    onSubmit: (data) => console.log(data),
  });

  const goToCatalog = () => {
    router.push('/catalog');
  };

  const onCompletedChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setValues((values) => ({ ...values, completionDate: '' }));
    formik.handleChange(event);
  };

  // TODO i18n labels
  return (
    <HeaderContentTemplate>
      <div className={style.formContent}>
        <IconButton onClick={goToCatalog}>
          <ArrowBackIcon classes={{ root: style.backButton }} />
        </IconButton>
        <form>
          <Grid container spacing={3} className={style.inputsContainer}>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <FormLabel>Title</FormLabel>
                <TextField
                  name='title'
                  className={style.outlinedFieldTheme}
                  autoFocus
                  variant='outlined'
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                Completed
                <Checkbox
                  name='completed'
                  classes={{ root: style.checkbox, checked: style.checked }}
                  checked={formik.values.completed}
                  onChange={(e) => onCompletedChange(e)}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel>Date of Completion</FormLabel>
                <TextField
                  disabled={!formik.values.completed}
                  name='completionDate'
                  className={style.selectAndDate}
                  type='date'
                  variant='outlined'
                  value={formik.values.completionDate}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.completionDate)}
                  helperText={
                    formik.touched.completionDate &&
                    formik.errors.completionDate
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel>Console</FormLabel>
                <TextField
                  name='console'
                  className={style.selectAndDate}
                  select
                  variant='outlined'
                  value={formik.values.console}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.console)}
                  helperText={formik.touched.console && formik.errors.console}
                >
                  <MenuItem value='XBOX_ONE'>XBOX ONE</MenuItem>
                  <MenuItem value='PS4'>PS4</MenuItem>
                  <MenuItem value='NINTENDO_SWITCH'>NINTENDO SWITCH</MenuItem>
                  <MenuItem value='PS5'>PS5</MenuItem>
                  <MenuItem value='PC'>PC</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel>Year</FormLabel>
                <TextField
                  name='year'
                  className={style.selectAndDate}
                  type='date'
                  variant='outlined'
                  value={formik.values.year}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.year)}
                  helperText={formik.touched.year && formik.errors.year}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <FormLabel>Personal Notes</FormLabel>
                <TextField
                  name='notes'
                  className={style.outlinedFieldTheme}
                  variant='outlined'
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                  error={Boolean(formik.errors.notes)}
                  helperText={formik.touched.notes && formik.errors.notes}
                />
              </FormControl>
            </Grid>
          </Grid>
          <div className={style.buttonsContainer}>
            <Button
              onClick={goToCatalog}
              className={style.formButtonCancel}
              variant='contained'
            >
              CANCEL
            </Button>
            <Button
              onClick={formik.submitForm}
              variant='contained'
              color='secondary'
            >
              SAVE
            </Button>
          </div>
        </form>
      </div>
    </HeaderContentTemplate>
  );
};

export default Form;
