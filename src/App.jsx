
import './App.css'
import { Route, Switch } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";
import Navbar from "./components/Navbar/Navbar";
import useStyles from './components/styles'
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Switch>
            <Route exact path="/">
              <Articles />
            </Route>
            <Route exact path="/article/:id">
              <ArticleDetail />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App
