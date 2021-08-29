import React, { ReactElement } from 'react';
import Header from '../Header';
import './style.css';
import Container from '../Container';
import { Typography } from '@material-ui/core';

interface Props {
  children: ReactElement;
}

const HeaderContentTemplate = (props: Props) => (
  <>
    <Header />
    <div className='breadcrumb'>
      <Typography color='textSecondary'>Catalog</Typography>
    </div>
    <Container>{props.children}</Container>
  </>
);

export default HeaderContentTemplate;
