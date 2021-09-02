import React from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import SearchInput from '../../components/SearchInput';
import GameCard from '../../components/GameCard';
import './style.css';
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
        <div className='cardsContainer'>
          {games.map((game) => (
            <div key={`${game.id}`} className='item'>
              <GameCard
                completionDate={game.completionDate}
                notes={game.notes}
                title={game.title}
                year={game.year}
                console={game.console}
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
