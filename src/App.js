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
import Header from './components/Header';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/mainPage' component={MainPage} />
        <Route path='/textbookPage' component={TextbookPage} />
        <Route path='/gamesPage' component={GamesPage} />
        <Route path='/statisticsPage' component={StatisticsPage} />
        <Redirect from='/' to='/mainPage'/>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
