import React from "react";
import { Typography, Grid, Grow, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Article = ({ article, i }) => {
  const classes = useStyles();
  const posterImage =
    article.media &&
    article.media.length > 0 &&
    article.media[0]["media-metadata"] &&
    article.media[0]["media-metadata"].length > 0
      ? article.media[0]["media-metadata"].slice(-1)[0].url
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.article}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link to={`/movie/${article.id}`} className={classes.links}>
          <img
            className={classes.image}
            src={posterImage}
            alt={article.title}
          />
          <Tooltip disableTouchListener title={`${article.title}`}>
          <Typography className={classes.title} variant="h5">
            {article.title}
          </Typography>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Article;
