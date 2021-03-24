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
import {numberOfUnits} from "./constants/constants"

function App() {
 const unitRoute = numberOfUnits.map((number) => {
    return (
      <Route path={`/unit${number}`} component={Unit}/>
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
        <Redirect from='/' to='/mainPage'/>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
