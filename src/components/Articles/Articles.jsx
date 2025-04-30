import React from 'react';
import { useSelector } from 'react-redux'
import { Box,CircularProgress, useMediaQuery, Typography } from '@mui/material';

import { useGetMostViewedQuery } from '@nyt'
import { Bounded } from '../ui/Bounded'
import ArticleList from '../ArticleList/ArticleList'

const Articles = () => {
  const { articlePeriodName } = useSelector((state) => state.currentArticlePeriod);
    const { data, error, isFetching } = useGetMostViewedQuery({articlePeriodName})
    console.log(data)

    if (isFetching) {
      return (
        <Box display="flex" justifyContent="center" >
          <CircularProgress size="4rem" />
        </Box>
      );
    }

    if(!data.results.length) {
      return (
        <Box display="flex" alignItems="center" height="100vh">
          <Typography variant="h4">
            No articles found.
          </Typography>
        </Box>
      )
    }
    
    if(error) return 'An error has occured.';

  return (
    <Bounded>
        <ArticleList articles={data}/>
    </Bounded>
  )
}

export default Articles