/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent, waitFor } from './myJestIntegrationRedux';
import Catalog from '../pages/Catalog';

jest.mock(
  '../components/HeaderContentTemplate',
  () =>
    function MockHeaderContentTemplate(props) {
      return <div>{props.children}</div>;
    },
);

it('should clear search when tap button', () => {
  act(() => {
    render(<Catalog />);
  });

  expect(screen.getByTestId('search-input')).toBeInTheDocument();

  expect(screen.getByTestId('search-input').textContent).toBe('');

  screen.getByTestId('search-input').textContent = 'hello';

  expect(screen.getByTestId('search-input').textContent).toBe('hello');

  act(() => {
    fireEvent.click(screen.getByTestId('search-clear-button'));
  });

  waitFor(() => {
    expect(screen.getByTestId('search-input').textContent).toHaveValue('');
  });
});
