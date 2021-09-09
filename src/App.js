import './styles/styles.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage/MainPage';
import StudyPage from './components/studyPage/StudyPage';
import GamesPage from './components/gamesPage/GamesPage';
import StatisticsPage from './components/statisticsPage/statisticsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


   return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/study' component={StudyPage} />
        <Route path='/games' component={GamesPage} />
        <Route path='/statistics' exact component={StatisticsPage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
