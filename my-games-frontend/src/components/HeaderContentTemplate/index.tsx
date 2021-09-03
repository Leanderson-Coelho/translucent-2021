import React, { ReactElement } from 'react';
import Header from '../Header';
import Container from '../Container';
import { Typography } from '@material-ui/core';
import useStyle from './style';
import { useLocation } from 'react-router-dom';
import { routesBreadCrumb } from '../../Routes';

interface Props {
  children: ReactElement;
}

const HeaderContentTemplate = (props: Props) => {
  const style = useStyle();
  const location = useLocation();

  return (
    <>
      <Header />
      <div className={style.breadcrumb}>
        <Typography color='textSecondary'>
          {routesBreadCrumb.get(location.pathname)}
        </Typography>
      </div>
      <Container>{props.children}</Container>
    </>
  );
};

export default HeaderContentTemplate;
