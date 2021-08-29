import React from 'react';
import { Card, InputBase } from '@material-ui/core';
import useStyles from './style';

const SearchInput = () => {
  const style = useStyles();
  // <div className='inputBox'>
  return (
    <Card classes={{ root: style.root }}>
      <InputBase placeholder='Search...' />
    </Card>
  );
  // </div>
};

export default SearchInput;
