import React from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import SearchInput from '../../components/SearchInput';
import GameCard from '../../components/GameCard';
import { Fab } from '@material-ui/core';
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
        <div className={style.cardsContainer}>
          {games.map((game) => (
            <div key={`${game.id}`} className={style.item}>
              <GameCard
                completionDate={game.completionDate}
                notes={game.notes}
                title={game.title}
                year={game.year}
                console={game.console}
                completed={game.completed}
              />
            </div>
          ))}
        </div>
        <Fab className={style.floatingButton} size='large' color='primary'>
          <AddIcon onClick={() => router.push('/form')} />
        </Fab>
      </>
    </HeaderContentTemplate>
  );
};

export default Catalog;
