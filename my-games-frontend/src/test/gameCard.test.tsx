/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import GameCard from '../components/GameCard';
import { DateTime } from 'luxon';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render game card with data', () => {
  const fakeGame = {
    title: 'Metal Gear Solid 2',
    completionDate: DateTime.fromISO('2017-08-07'),
    console: 'PS2',
    year: DateTime.fromISO('2001-11-13'),
    notes: 'I really liked this game. A masterpiece from Kojima productions.',
    completed: true,
  };

  act(() => {
    render(
      <GameCard
        title={fakeGame.title}
        completionDate={fakeGame.completionDate}
        console={fakeGame.console}
        year={fakeGame.year}
        notes={fakeGame.notes}
        completed={fakeGame.completed}
      />,
      container,
    );
  });

  expect(container.querySelector('[data-testid="title"]')).toBeInTheDocument();
  expect(container.querySelector('[data-testid="title"]').textContent).toBe(
    fakeGame.title,
  );

  expect(
    container.querySelector('[data-testid="completionDate"]'),
  ).toBeInTheDocument();

  expect(
    container.querySelector('[data-testid="console"]'),
  ).toBeInTheDocument();
  expect(container.querySelector('[data-testid="console"]').textContent).toBe(
    fakeGame.console,
  );

  expect(container.querySelector('[data-testid="year"]')).toBeInTheDocument();

  expect(container.querySelector('[data-testid="notes"]')).toBeInTheDocument();
  expect(container.querySelector('[data-testid="notes"]').textContent).toBe(
    fakeGame.notes,
  );
});
