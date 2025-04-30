import { Grid } from '@mui/material';
import useStyles from './styles'
import { Bounded } from '../ui/Bounded'
import Article from '../Article/Article';
const ArticleList = ({ articles }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.articlesContainer}>
        {articles.results.map((article, i) => (
            <Article key={i} article={article} i={i}/>
        ))}
    </Grid>
  )
}

export default ArticleList