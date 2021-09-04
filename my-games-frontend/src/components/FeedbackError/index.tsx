/* eslint-disable no-shadow */
import { RootState } from '../../redux/index';
import React from 'react';
import { useSelector } from 'react-redux';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './style';
import i18n from '../../config/i18n';

interface Props {
  severity: 'success' | 'info' | 'warning' | 'error';
  type: 'FETCH' | 'ADD';
}

const FeedbackError = (props: Props) => {
  const style = useStyles();
  const { errorAdd, errorFetch } = useSelector(
    (state: RootState) => state.game,
  );

  const renderErrorsMessages = (errors: any) => (
    <div>
      {errors.map((error: String, index: number) => (
        <MuiAlert
          className={style.alert}
          severity={props.severity}
          elevation={1}
          variant='filled'
          key={`${index}`}
        >
          {i18n.t(`${error}`)}
        </MuiAlert>
      ))}
    </div>
  );

  return props.type === 'FETCH'
    ? renderErrorsMessages(errorFetch)
    : renderErrorsMessages(errorAdd);
};

export default FeedbackError;
