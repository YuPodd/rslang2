import './styles/styles.css';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import StudyPage from './components/studyPage/StudyPage';
import GamesPage from './components/gamesPage/GamesPage';
import StatisticsPage from './components/statisticsPage/statisticsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Unit from './components/studyPage/Unit'
import {listOfGames, numberOfUnits} from "./constants/constants"
import Game from './components/gamesPage/Game'

function App() {
 const unitRoute = numberOfUnits.map((number) => {
    return (
      <Route path="/unit/:number" component={Unit}/>
    )
  });
  const gameRoute = listOfGames.map((game) => {
    return (
      <Route path="/games/:game" component={Game}/>
    )
  });
   return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/mainPage' component={MainPage} />
        <Route path='/studyPage' component={StudyPage} />
        <Route path='/gamesPage' component={GamesPage} />
        <Route path='/statisticsPage' component={StatisticsPage} />
        {unitRoute}
        {gameRoute}
        <Redirect from='/' to='/mainPage'/>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
