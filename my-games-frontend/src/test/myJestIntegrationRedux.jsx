/* eslint-disable object-curly-spacing */
/* eslint-disable react/prop-types */
import React from 'react';
import { render as tlRender, queryByTestId } from '@testing-library/react';
import { reducers } from '../redux/syncLocalStorageReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { DateTime } from 'luxon';

const preloadedState = {
  game: {
    data: [
      {
        id: 'f114bb71-f146-49bf-bb90-08af5cf4d6ea',
        title: 'League of Legends',
        completionDate: DateTime.fromISO('2020-07-04'),
        console: 'PC',
        year: DateTime.fromISO('2009-10-20'),
        notes: '',
        completed: true,
      },
      {
        id: 'ab9f4634-8113-4428-b434-48c50924c8c2',
        title: 'Valorant',
        completionDate: DateTime.fromISO('2021-09-01'),
        console: 'PC',
        year: DateTime.fromISO('2020-06-02'),
        notes:
          'Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games. ',
        completed: true,
      },
    ],
    loading: false,
    success: false,
    errorFetch: [],
    errorAdd: ['error.fail.on.operation.save'],
    coldList: false,
  },
  theme: { themeConfig: 'DARK' },
  location: { data: 'pt-BR', breadcrumbs: new Map() },
};

const render = (ui, { store = createStore(reducers, preloadedState) } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <>{children}</>
    </Provider>
  );
  return tlRender(ui, { wrapper: Wrapper });
};

export * from '@testing-library/react';
export { render };
