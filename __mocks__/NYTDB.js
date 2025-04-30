export const nytApi = {
  reducerPath: 'nytApi',
  reducer: (state = {}, action) => state,
  middleware: () => (next) => (action) => next(action),
};

export function useGetMostViewedQuery() {
  return { data: { results: [] }, error: null, isFetching: false };
}