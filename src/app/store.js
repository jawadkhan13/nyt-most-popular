import { configureStore } from '@reduxjs/toolkit';
import { nytApi } from '../services/NYTDB';
import articlePeriodReducer from '../features/currentArticleSlice';

export default configureStore({
  reducer: {
    [nytApi.reducerPath]: nytApi.reducer,
    currentArticlePeriod: articlePeriodReducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(nytApi.middleware),
});
