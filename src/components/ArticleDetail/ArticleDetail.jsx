import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography, Grid, Button, CircularProgress } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { useGetMostViewedQuery } from '@nyt';
import useStyles from "./styles";
import { Bounded } from "../ui/Bounded";
const ArticleDetail = () => {
  const { id } = useParams();
  const { articlePeriodName } = useSelector((s) => s.currentArticlePeriod);
  const { data, isFetching, error } = useGetMostViewedQuery({
    articlePeriodName,
  });

  const classes = useStyles();

  if (isFetching) return <CircularProgress />;
  if (error) return <Typography>Error loading.</Typography>;

  // find the one matching ID
  const article = data.results.find((a) => String(a.id) === id);
  if (!article) return <Typography>Article not found.</Typography>;

  const posterImage =
    article.media?.[0]?.["media-metadata"]?.slice(-1)[0]?.url ||
    "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <Bounded>
      <Grid container className={classes.containerSpaceAround}>
        <img src={posterImage} alt={article.title} className={classes.poster} />
        <Grid container direction="column" lg={7}>

        <Typography variant="h4" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {article.byline} — {article.published_date}
        </Typography>
        <Typography variant="body1">{article.abstract}</Typography>
        </Grid>
        <Button data-testid="back-button" component={Link} to="/" startIcon={<ArrowBack />} variant="outlined">
        Back
      </Button>
      </Grid>
    </Bounded>
  );
};

export default ArticleDetail;
