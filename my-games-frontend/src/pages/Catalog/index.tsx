import React from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import SearchInput from '../../components/SearchInput';
import GameCard from '../../components/GameCard';
import { Fab, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducer';

const Catalog = () => {
  const style = useStyles();
  const router = useHistory();
  const games = useSelector((state: State) => state.games);
  console.log('Redux State', games);

  return (
    <HeaderContentTemplate>
      <>
        <SearchInput />
        <Grid container spacing={10} className={style.cardsContainer}>
          {games.map((game) => (
            <Grid
              key={`${game.id}`}
              item
              xs={12}
              sm={6}
              md={4}
              className={style.item}
            >
              <GameCard
                completionDate={game.completionDate}
                notes={game.notes}
                title={game.title}
                year={game.year}
                console={game.console}
                completed={game.completed}
              />
            </Grid>
          ))}
        </Grid>
        <Fab className={style.floatingButton} size='large' color='primary'>
          <AddIcon onClick={() => router.push('/form')} />
        </Fab>
      </>
    </HeaderContentTemplate>
  );
};

export default Catalog;
