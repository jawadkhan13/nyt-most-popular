import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectArticlePeriod } from '../../features/currentArticleSlice';
import { Link, useLocation } from 'react-router-dom';
import useStyles from "./styles";   
const Navbar = () => {
    const { articlePeriodName } = useSelector((state) => state.currentArticlePeriod);
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();

    // Detect if we're on a detail page
    const isDetailPage = /^\/article\/[^/]+$/.test(location.pathname);
    console.log(isDetailPage)
  return (
    <AppBar className={classes.toolbar}>
      <Toolbar className={classes.toolbar}>
        {!isDetailPage && (
          <Box display="flex" gap={2}>
            <Button variant="contained" onClick={() => dispatch(selectArticlePeriod('1'))}>
              Today
            </Button>
            <Button variant="contained" onClick={() => dispatch(selectArticlePeriod('7'))}>
              Last Week
            </Button>
            <Button variant="contained" onClick={() => dispatch(selectArticlePeriod('30'))}>
              Last Month
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
