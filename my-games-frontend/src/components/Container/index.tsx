import React, { ReactElement } from 'react';
import './style.css';

interface Props {
  children: ReactElement;
}

const Container = (props: Props) => (
  <div className='containerMargin'>{props.children}</div>
);

export default Container;
