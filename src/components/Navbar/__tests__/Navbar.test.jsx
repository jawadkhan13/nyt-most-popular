/* eslint-env jest */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles'; 

import { store } from '../../../app/store';
import Navbar from '../Navbar';


test('renders filter buttons and dispatches', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
      <StylesThemeProvider theme={createTheme()}>
        <Navbar />
      </StylesThemeProvider>
      </MemoryRouter>
    </Provider>
  );

  const todayBtn = screen.getByRole('button', { name: /Today/i });
  expect(todayBtn).toBeInTheDocument();

  fireEvent.click(todayBtn);
  const state = store.getState().currentArticlePeriod;
  expect(state.articlePeriodName).toBe('1');
});
