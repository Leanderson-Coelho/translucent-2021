import React from 'react';
import { Chip, Card, Paper, Typography } from '@material-ui/core';
import useCardStyle from './cardStyle';
import clsx from 'clsx';

interface Props {
  title?: String;
  notes?: String;
  completionDate?: Date;
  console?: String;
  year?: Date;
  completed?: Boolean;
}

const GameCard = (props: Props) => {
  const style = useCardStyle();
  const gameOld = props.year
    ? new Date().getFullYear() - props.year?.getFullYear()
    : '0';
  console.log(
    'props.completed && props.completionDate',
    'props.completed ',
    props.completed,
    'props.completionDate',
    props.completionDate,
    props.completed && props.completionDate,
  );

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
            <>Completed at {props.completionDate.toDateString()}</>
          ) : (
            <>Uncompleted</>
          )}
        </Typography>
      </div>
      <div className={clsx(style.cardFooter, style.itemSpacingFooter)}>
        <Chip color='secondary' size='small' label={props.console} />
        <div>{gameOld} years old</div>
      </div>
    </Card>
  );
};

export default GameCard;
