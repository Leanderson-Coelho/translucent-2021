import React from 'react';
import { Card, InputBase } from '@material-ui/core';
import useStyles from './style';

const SearchInput = () => {
  const style = useStyles();
  // TODO i18n at 'search'
  return (
    <Card classes={{ root: style.root }}>
      <InputBase classes={{ root: style.inputBase }} placeholder='Search...' />
    </Card>
  );
};

export default SearchInput;
