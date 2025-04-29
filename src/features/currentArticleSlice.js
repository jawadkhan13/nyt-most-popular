// src/features/currentArticleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'currentArticle',
  initialState: null,
  reducers: {
    setArticle: (state, action) => action.payload,
    clearArticle: () => null,
  },
});

export const { setArticle, clearArticle } = slice.actions;
export default slice.reducer;
