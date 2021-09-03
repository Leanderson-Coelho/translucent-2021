import React from 'react';
import { Chip, Card, Paper, Typography } from '@material-ui/core';
import useCardStyle from './cardStyle';
import clsx from 'clsx';
import i18n, { toLocaleString } from '../../config/i18n';
import { DateTime } from 'luxon';

interface Props {
  title?: String;
  notes?: String;
  completionDate?: DateTime;
  console?: String;
  year?: DateTime;
  completed?: Boolean;
}

const GameCard = (props: Props) => {
  const style = useCardStyle();
  console.warn('calculate year old');
  const gameOld = props.year ? 10 : '0';

  return (
    <Card classes={{ root: style.root }}>
      <Paper
        classes={{ root: style.cardHeader }}
        elevation={2}
        className={style.itemSpacing}
      >
        {props.title}
      </Paper>
      <div className={clsx(style.cardContent, style.itemSpacing)}>
        <div className={style.cardContentNotes}>{props.notes}</div>
        <Typography color='textSecondary'>
          {props.completed && props.completionDate ? (
            <>
              {i18n.t('catalog.gameCard.completedAt', {
                date: toLocaleString(props.completionDate),
              })}
            </>
          ) : (
            <>{i18n.t('catalog.gameCard.uncompleted')}</>
          )}
        </Typography>
      </div>
      <div className={clsx(style.cardFooter, style.itemSpacingFooter)}>
        <Chip color='secondary' size='small' label={props.console} />
        <div>{i18n.t('catalog.gameCard.yearsOld', { old: gameOld })}</div>
      </div>
    </Card>
  );
};

export default GameCard;
