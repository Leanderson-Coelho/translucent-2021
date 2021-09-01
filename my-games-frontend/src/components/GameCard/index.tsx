import React from 'react';
import { Chip, Card, Paper, Typography } from '@material-ui/core';
import useCardStyle from './cardStyle';
import './style.css';

interface Props {
  title: String;
  notes: String;
  completionDate: Date | null;
  console: String;
  year: Date;
}

const GameCard = (props: Props) => {
  const style = useCardStyle();
  const gameOld = new Date().getFullYear() - props.year.getFullYear();

  return (
    <Card classes={{ root: style.root }}>
      <Paper
        classes={{ root: style.cardHeader }}
        elevation={2}
        className='cardHeader itemSpacing'
      >
        {props.title}
      </Paper>
      <div className='cardContent itemSpacing'>
        <div className='cardContentNotes'>{props.notes}</div>
        <Typography color='textSecondary'>
          {props.completionDate ? (
            <>Completed at {props.completionDate.toDateString()}</>
          ) : (
            <>Uncompleted</>
          )}
        </Typography>
      </div>
      <div className='cardFooter itemSpacingFooter'>
        <Chip color='secondary' size='small' label={props.console} />
        <div>{gameOld} years old</div>
      </div>
    </Card>
  );
};

export default GameCard;
