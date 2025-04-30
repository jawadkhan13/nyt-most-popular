
import React from 'react';
import { render, screen } from '@testing-library/react';
import Articles from '../Articles';
import * as api from '@nyt';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

test('shows loading indicator', () => {
  jest.spyOn(api, 'useGetMostViewedQuery').mockReturnValue({
    data: null, error: null, isFetching: true
  });

  render(
    <Provider store={store}>
      <Articles />
    </Provider>
  );
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});