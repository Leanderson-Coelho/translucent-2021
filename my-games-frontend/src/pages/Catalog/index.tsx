import { Typography, Card } from '@material-ui/core';
import React from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import SearchInput from '../../components/SearchInput';

const Catalog = () => (
  <HeaderContentTemplate>
    <>
      <SearchInput />
      <br />
      <Card>
        <Typography color='textPrimary'>
          For readability we recommend against using more than 80 characters: In
          code styleguides.
        </Typography>
      </Card>
      <p>
        For readability we recommend against using more than 80 characters: In
        code styleguides, maximum line length rules are often set to 100 or 120.
        However, when humans write code, they don’t strive to reach the maximum
        number of columns on every line. Developers often use whitespace to
        break up long lines for readability. In practice, the average line
        length often ends up well below the maximum. Prettier’s printWidth
        option does not work the same way. It is not the hard upper allowed line
        length limit. It is a way to say to Prettier roughly how long you’d like
        lines to be. Prettier will make both shorter and longer lines, but
        generally strive to meet the specified printWidth. Remember, computers
        are dumb. You need to explicitly tell them what to do, while humans can
        make their own (implicit) judgements, for example on when to break a
        line. In other words, don’t try to use printWidth as if it was ESLint’s
        max-len – they’re not the same. max-len just says what the maximum
        allowed line length is, but not what the generally preferred length is –
        which is what printWidth specifies.
      </p>
      <p>
        For readability we recommend against using more than 80 characters: In
        code styleguides, maximum line length rules are often set to 100 or 120.
        However, when humans write code, they don’t strive to reach the maximum
        number of columns on every line. Developers often use whitespace to
        break up long lines for readability. In practice, the average line
        length often ends up well below the maximum. Prettier’s printWidth
        option does not work the same way. It is not the hard upper allowed line
        length limit. It is a way to say to Prettier roughly how long you’d like
        lines to be. Prettier will make both shorter and longer lines, but
        generally strive to meet the specified printWidth. Remember, computers
        are dumb. You need to explicitly tell them what to do, while humans can
        make their own (implicit) judgements, for example on when to break a
        line. In other words, don’t try to use printWidth as if it was ESLint’s
        max-len – they’re not the same. max-len just says what the maximum
        allowed line length is, but not what the generally preferred length is –
        which is what printWidth specifies.
      </p>
      <p>
        For readability we recommend against using more than 80 characters: In
        code styleguides, maximum line length rules are often set to 100 or 120.
        However, when humans write code, they don’t strive to reach the maximum
        number of columns on every line. Developers often use whitespace to
        break up long lines for readability. In practice, the average line
        length often ends up well below the maximum. Prettier’s printWidth
        option does not work the same way. It is not the hard upper allowed line
        length limit. It is a way to say to Prettier roughly how long you’d like
        lines to be. Prettier will make both shorter and longer lines, but
        generally strive to meet the specified printWidth. Remember, computers
        are dumb. You need to explicitly tell them what to do, while humans can
        make their own (implicit) judgements, for example on when to break a
        line. In other words, don’t try to use printWidth as if it was ESLint’s
        max-len – they’re not the same. max-len just says what the maximum
        allowed line length is, but not what the generally preferred length is –
        which is what printWidth specifies.
      </p>
      <p>
        For readability we recommend against using more than 80 characters: In
        code styleguides, maximum line length rules are often set to 100 or 120.
        However, when humans write code, they don’t strive to reach the maximum
        number of columns on every line. Developers often use whitespace to
        break up long lines for readability. In practice, the average line
        length often ends up well below the maximum. Prettier’s printWidth
        option does not work the same way. It is not the hard upper allowed line
        length limit. It is a way to say to Prettier roughly how long you’d like
        lines to be. Prettier will make both shorter and longer lines, but
        generally strive to meet the specified printWidth. Remember, computers
        are dumb. You need to explicitly tell them what to do, while humans can
        make their own (implicit) judgements, for example on when to break a
        line. In other words, don’t try to use printWidth as if it was ESLint’s
        max-len – they’re not the same. max-len just says what the maximum
        allowed line length is, but not what the generally preferred length is –
        which is what printWidth specifies.
      </p>
    </>
  </HeaderContentTemplate>
);

export default Catalog;
