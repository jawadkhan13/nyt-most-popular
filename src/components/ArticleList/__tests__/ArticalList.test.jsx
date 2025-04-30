import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider as StylesProvider  } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { MemoryRouter } from 'react-router-dom';

import ArticleList from '../ArticleList';


const fakeArticles = {
  results: [
    { id: 1, title: 'A', media: [] },
    { id: 2, title: 'B', media: [] }
  ]
};

test('renders correct number of articles', () => {
  render(
    <MemoryRouter>
      <StylesProvider theme={createTheme()}>
        <ArticleList articles={fakeArticles} />
      </StylesProvider>
    </MemoryRouter>
  );
  expect(screen.getAllByRole('link')).toHaveLength(2);
});