import React, { ReactElement } from 'react';
import Header from '../Header';
import Container from '../Container';
import { Typography } from '@material-ui/core';
import useStyle from './style';

interface Props {
  children: ReactElement;
}

const HeaderContentTemplate = (props: Props) => {
  const style = useStyle();

  return (
    <>
      <Header />
      <div className={style.breadcrumb}>
        <Typography color='textSecondary'>Catalog</Typography>
      </div>
      <Container>{props.children}</Container>
    </>
  );
};

export default HeaderContentTemplate;
