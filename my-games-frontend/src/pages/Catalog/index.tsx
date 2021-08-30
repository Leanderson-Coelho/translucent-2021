import React from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import SearchInput from '../../components/SearchInput';
import GameCard from '../../components/GameCard';
import './style.css';

const Catalog = () => {
  const games = [
    {
      id: 'asd0sa8d0',
      title: 'Metal Gear Solid 2',
      year: new Date('01/01/2011'),
      console: 'PS2',
      completionDate: new Date(),
      notes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 'asd0sa8d1',
      title: 'Marvel’s Spider-Man',
      year: new Date('01/01/2018'),
      console: 'PS4',
      completionDate: new Date('07/08/2017'),
      notes:
        'Using tokens rewarded from objectives, Spider-Man can unlock and craft new gadgets, suits, and Suit Mods',
    },
    {
      id: 'asd0sa8d2',
      title: 'Super Mario Bros.',
      year: new Date('09/13/1985'),
      console: 'NINTENDO',
      completionDate: null,
      notes:
        'In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser.',
    },
    {
      id: 'asd0sa8d3',
      title: 'Metal Gear Solid 2',
      year: new Date('01/01/2001'),
      console: 'PS2',
      completionDate: new Date(),
      notes: 'I really liked this game. A masterpiece from Kojima productions.',
    },
    {
      id: 'asd0sa8d4',
      title: 'Marvel’s Spider-Man',
      year: new Date('01/01/2018'),
      console: 'PS4',
      completionDate: new Date('07/08/2017'),
      notes:
        'Using tokens rewarded from objectives, Spider-Man can unlock and craft new gadgets, suits, and Suit Mods',
    },
    {
      id: 'asd0sa8d5',
      title: 'Super Mario Bros.',
      year: new Date('09/13/1985'),
      console: 'NINTENDO',
      completionDate: null,
      notes:
        'In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser.',
    },
  ];
  return (
    <HeaderContentTemplate>
      <>
        <SearchInput />
        <div className='cardsContainer'>
          {games.map((game) => (
            <div key={game.id} className='item'>
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
      </>
    </HeaderContentTemplate>
  );
};

export default Catalog;
