import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import MovieList from './components/movielist/movielist';
import Movie from './pages/moviedetail/moviedetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />} />
          <Route path="movies/:type" element={<MovieList />} />
          <Route path="/***" element={<h1>Error page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;