// src/api/nytApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const nytApiKey = import.meta.env.VITE_NYT_KEY;
console.log(nytApiKey);
const period = 1;

export const nytApi = createApi({
  reducerPath: 'nytApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.nytimes.com/svc/mostpopular/v2' }),
  endpoints: (builder) => ({
     //* Get Article List 
    getMostViewed: builder.query({
      query: ({articlePeriodName}) => {
        if (articlePeriodName && typeof articlePeriodName === 'string'){
          return `viewed/${articlePeriodName}.json?api-key=${nytApiKey}`
        }
        return `viewed/${period}.json?api-key=${nytApiKey}`
      }
    }),

  }),
});

export const { useGetMostViewedQuery } = nytApi;
