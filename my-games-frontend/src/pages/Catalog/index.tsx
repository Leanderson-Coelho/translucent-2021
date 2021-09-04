import React, { useEffect } from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import SearchInput from '../../components/SearchInput';
import GameCard from '../../components/GameCard';
import { Fab, Grid, CircularProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PATHS } from '../../Routes';
import { RootState } from '../../redux';
import Game from '../../model/Game';
import { fetchGames } from '../../redux/game/actionCreators';
import FeedbackError from '../../components/FeedbackError';

const Catalog = () => {
  const style = useStyles();
  const router = useHistory();
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.data);
  const gamesLoading = useSelector((state: RootState) => state.game.loading);
  const coldList = useSelector((state: RootState) => state.game.coldList);

  useEffect(() => {
    if (games.length === 0 || coldList) {
      dispatch(fetchGames());
    }
  }, []);

  return (
    <HeaderContentTemplate>
      <>
        <SearchInput />
        <FeedbackError type='FETCH' severity='warning' />
        {gamesLoading && <CircularProgress className={style.loading} />}
        <Grid container spacing={10} className={style.cardsContainer}>
          {games.map((game: Game) => (
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
          <AddIcon onClick={() => router.push(PATHS.FORM)} />
        </Fab>
      </>
    </HeaderContentTemplate>
  );
};

export default Catalog;
