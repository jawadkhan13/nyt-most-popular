import { createSlice } from '@reduxjs/toolkit';

export const articlePeriod = createSlice({
  name: 'articlePeriod',
  initialState: {
    articlePeriodName:'',
    period: 1,
  },
  reducers: {
    selectArticlePeriod: (state, action) => {
      state.articlePeriodName = action.payload
    },
    
  },
});

export const { selectArticlePeriod } = articlePeriod.actions

export default articlePeriod.reducer;
