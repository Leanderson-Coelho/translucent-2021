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
import i18n, { toLocaleString } from '../../config/i18n';
import { DateTime } from 'luxon';
import { PATHS } from '../../Routes';
import useGlobalStyle from '../../config/theme/globalStyle';
import FeedbackError from '../../components/FeedbackError';
import { useDispatch } from 'react-redux';
import { addGame } from '../../redux/game/actionCreators';

const Form = () => {
  const style = useStyle();
  const globalStyle = useGlobalStyle();
  const router = useHistory();
  const dispatch = useDispatch();
  const minDateLocale = toLocaleString(DateTime.fromISO('1970-01-01'));
  const validationSchema = yup.object({
    completed: yup.boolean(),
    completionDate: yup.date().when('completed', {
      is: true,
      then: yup
        .date()
        .max(new Date(), i18n.t('form.input.validation.maxDate'))
        .required(i18n.t('form.input.validation.required')),
    }),
    console: yup.string().required(i18n.t('form.input.validation.required')),
    year: yup
      .date()
      .min(
        new Date('01-01-1970'),
        i18n.t('form.input.validation.minDate', { date: minDateLocale }),
      )
      .required(i18n.t('form.input.validation.required')),
    notes: yup.string(),
  });

  const goToCatalog = () => {
    router.push(PATHS.CATALOG);
  };

  const onCompletedChange = (event: ChangeEvent<HTMLInputElement>) => {
    formik.setValues((values) => ({ ...values, completionDate: '' }));
    formik.handleChange(event);
  };

  const dispatchAddGame = (data: any) => {
    dispatch(addGame(data));
  };

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
    onSubmit: dispatchAddGame,
  });

  return (
    <HeaderContentTemplate>
      <div className={style.formContent}>
        <IconButton onClick={goToCatalog}>
          <ArrowBackIcon classes={{ root: style.backButton }} />
        </IconButton>
        <FeedbackError severity='error' type='ADD' />
        <form>
          <Grid container spacing={3} className={style.inputsContainer}>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth>
                <FormLabel>{i18n.t('form.input.title')}</FormLabel>
                <TextField
                  autoComplete='off'
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
                {i18n.t('form.input.completed')}
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
                <FormLabel>{i18n.t('form.input.completionDate')}</FormLabel>
                <TextField
                  disabled={!formik.values.completed}
                  name='completionDate'
                  className={globalStyle.selectAndDate}
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
                <FormLabel>{i18n.t('form.input.console')}</FormLabel>
                <TextField
                  name='console'
                  className={globalStyle.selectAndDate}
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
                <FormLabel>{i18n.t('form.input.year')}</FormLabel>
                <TextField
                  name='year'
                  className={globalStyle.selectAndDate}
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
                <FormLabel>{i18n.t('form.input.notes')}</FormLabel>
                <TextField
                  name='notes'
                  autoComplete='off'
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
              {i18n.t('form.input.cancel')}
            </Button>
            <Button
              onClick={formik.submitForm}
              variant='contained'
              color='secondary'
            >
              {i18n.t('form.input.save')}
            </Button>
          </div>
        </form>
      </div>
    </HeaderContentTemplate>
  );
};

export default Form;
