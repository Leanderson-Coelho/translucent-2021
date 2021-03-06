/* eslint-disable indent */
import React from 'react';
import { Chip, Card, Paper, Typography } from '@material-ui/core';
import useStyle from './style';
import clsx from 'clsx';
import i18n, { toLocaleString } from '../../config/i18n';
import { DateTime, Interval } from 'luxon';

interface Props {
  title?: String;
  notes?: String;
  completionDate?: DateTime;
  console?: String;
  year?: DateTime;
  completed?: Boolean;
}

const GameCard = (props: Props) => {
  const style = useStyle();
  const gameOld = props.year
    ? Interval.fromDateTimes(props.year, DateTime.now())
        .length('years')
        .toFixed(0)
    : 0;

  return (
    <Card classes={{ root: style.root }}>
      <Paper
        data-testid='title'
        classes={{ root: style.cardHeader }}
        elevation={2}
        className={style.itemSpacing}
      >
        {props.title}
      </Paper>
      <div className={clsx(style.cardContent, style.itemSpacing)}>
        <div data-testid='notes' className={style.cardContentNotes}>
          {props.notes}
        </div>
        <Typography data-testid='completionDate' color='textSecondary'>
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
        <Chip
          data-testid='console'
          color='secondary'
          size='small'
          label={props.console}
        />
        <div data-testid='year'>
          {gameOld > 0
            ? i18n.t('catalog.gameCard.yearsOld.other', { old: gameOld })
            : i18n.t('catalog.gameCard.yearsOld.thisYear')}
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
