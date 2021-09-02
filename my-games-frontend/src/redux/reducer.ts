import Game from '../model/Game';

export interface State {
  games: Game[];
}

const initialState: State = {
  games: [
    {
      id: 'asd0sa8d0',
      title: 'Com o Redux',
      year: new Date('01/01/2011'),
      console: 'PS2',
      completionDate: new Date(),
      notes: 'I really liked this game. A masterpiece from Kojima productions.',
      completed: true,
    },
    {
      id: 'asd0sa8d1',
      title: 'Marvel’s Spider-Man',
      year: new Date('01/01/2018'),
      console: 'PS4',
      completionDate: new Date('07/08/2017'),
      notes:
        'Using tokens rewarded from objectives, Spider-Man can unlock and craft new gadgets, suits, and Suit Mods',
      completed: true,
    },
    {
      id: 'asd0sa8d2',
      title: 'Super Mario Bros.',
      year: new Date('09/13/1985'),
      console: 'NINTENDO',
      notes:
        'In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser.',
      completed: false,
    },
    {
      id: 'asd0sa8d3',
      title: 'Metal Gear Solid 2',
      year: new Date('01/01/2001'),
      console: 'PS2',
      completionDate: new Date(),
      notes: 'I really liked this game. A masterpiece from Kojima productions.',
      completed: true,
    },
    {
      id: 'asd0sa8d4',
      title: 'Marvel’s Spider-Man',
      year: new Date('01/01/2018'),
      console: 'PS4',
      completionDate: new Date('07/08/2017'),
      notes:
        'Using tokens rewarded from objectives, Spider-Man can unlock and craft new gadgets, suits, and Suit Mods',
      completed: true,
    },
    {
      id: 'asd0sa8d5',
      title: 'Super Mario Bros.',
      year: new Date('09/13/1985'),
      console: 'NINTENDO',
      notes:
        'In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser.',
      completed: false,
    },
    {
      id: 'asd0sa8d6',
      title: 'Metal Gear Solid 2',
      year: new Date('01/01/2001'),
      console: 'PS2',
      completionDate: new Date(),
      notes: 'I really liked this game. A masterpiece from Kojima productions.',
      completed: true,
    },
    {
      id: 'asd0sa8d7',
      title: 'Marvel’s Spider-Man',
      year: new Date('01/01/2018'),
      console: 'PS4',
      completionDate: new Date('07/08/2017'),
      notes:
        'Using tokens rewarded from objectives, Spider-Man can unlock and craft new gadgets, suits, and Suit Mods',
      completed: true,
    },
    {
      id: 'asd0sa8d8',
      title: 'Super Mario Bros.',
      year: new Date('09/13/1985'),
      console: 'NINTENDO',
      notes:
        'In the game, Mario must race through the Mushroom Kingdom and save Princess Toadstool (later Princess Peach) from Bowser.',
      completed: false,
    },
  ],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
