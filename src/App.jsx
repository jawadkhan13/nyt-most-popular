
import './App.css'
import { Route, Switch } from "react-router-dom";
import ArticalList from "./components/ArticleList/ArticleList";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";
import ArticleItem from "./components/ArticleItem/ArticleItem";
const App = () => {


  return (
    <main className="text-3xl font-bold">
      <Switch>
        <Route exact path='/'>
          <ArticalList />
        </Route>
        <Route exact path='/article'>
          <ArticleDetail />
        </Route>
        <Route exact path='/article/:id'>
          <ArticleItem />
        </Route>
      </Switch>
    </main>
      
  )
}

export default App
