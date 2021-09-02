import React, { ReactElement } from 'react';
import useStyle from './style';

interface Props {
  children: ReactElement;
}

const Container = (props: Props) => {
  const style = useStyle();
  return <div className={style.containerMargin}>{props.children}</div>;
};

export default Container;
