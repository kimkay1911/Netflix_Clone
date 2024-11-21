
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import MoviePage from './Pages/MoviePage';
import Netflix from './Pages/Netflix';
import Player from './Pages/Player';
import TvShows from './Pages/TvShows';
import BackgroundImage from './Components/BackgroundImage';
import Header from './Components/Header';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element = {<LoginPage />}/>
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/moviepage' element={<MoviePage />}/>
        <Route exact path='/' element={<Netflix />}/>
        <Route exact path='/player' element={<Player />}/>
        <Route exact path='/tvshows' element={<TvShows />}/>
      </Routes>
      <Header />
    </BrowserRouter>
    
  );
}

export default App;
