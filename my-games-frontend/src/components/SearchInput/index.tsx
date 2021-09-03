import React from 'react';
import { Card, InputBase } from '@material-ui/core';
import useStyles from './style';
import i18n from '../../config/i18n';

const SearchInput = () => {
  const style = useStyles();

  return (
    <Card classes={{ root: style.root }}>
      <InputBase
        classes={{ root: style.inputBase }}
        placeholder={i18n.t('catalog.searchLabel')}
      />
    </Card>
  );
};

export default SearchInput;
