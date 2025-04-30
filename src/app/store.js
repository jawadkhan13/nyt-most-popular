import { configureStore } from '@reduxjs/toolkit';
import { nytApi } from '@nyt';
import articlePeriodReducer from '../features/currentArticleSlice';

export const store = configureStore({
  reducer: {
    [nytApi.reducerPath]: nytApi.reducer,
    currentArticlePeriod: articlePeriodReducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(nytApi.middleware),
});
