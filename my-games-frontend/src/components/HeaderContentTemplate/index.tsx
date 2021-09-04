import React, { ReactElement } from 'react';
import Header from '../Header';
import Container from '../Container';
import { Typography } from '@material-ui/core';
import useStyle from './style';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';

interface Props {
  children: ReactElement;
}

const HeaderContentTemplate = (props: Props) => {
  const style = useStyle();
  const location = useLocation();
  const breadcrumbs = useSelector(
    (state: RootState) => state.location.breadcrumbs,
  );

  return (
    <>
      <Header />
      <div className={style.breadcrumb}>
        <Typography color='textSecondary'>
          {breadcrumbs.get(location.pathname)}
        </Typography>
      </div>
      <Container>{props.children}</Container>
    </>
  );
};

export default HeaderContentTemplate;
