import { configureStore } from '@reduxjs/toolkit';
import { nytApi } from '../services/NYTDB';
import currentArticleReducer from '../features/currentArticleSlice';

export default configureStore({
  reducer: {
    [nytApi.reducerPath]: nytApi.reducer,
    currentArticle: currentArticleReducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(nytApi.middleware),
});
