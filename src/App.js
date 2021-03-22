import './App.css';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import TextbookPage from './components/textbookPage/TextbookPage';
import GamesPage from './components/gamesPage/GamesPage';
import StatisticsPage from './components/statisticsPage/statisticsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/mainPage' component={MainPage} />
        <Route path='/textbookPage' component={TextbookPage} />
        <Route path='/gamesPage' component={GamesPage} />
        <Route path='/statisticsPage' component={StatisticsPage} />
        <Redirect from='/' to='/mainPage'/>
      </Switch>
    </div>
  );
}

export default App;
