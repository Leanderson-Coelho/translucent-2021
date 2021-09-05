/* eslint-disable no-undef */
import React from 'react';
import { act } from 'react-dom/test-utils';
import FeedbackError from '../components/FeedbackError';
import { render, screen } from './myJestIntegrationRedux';

it('should render a error message', () => {
  act(() => {
    render(<FeedbackError severity='error' type='ADD' />);
  });

  expect(screen.getByTestId('error')).toBeInTheDocument();
});
