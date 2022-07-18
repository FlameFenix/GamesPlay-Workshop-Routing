import './App.css';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

import { CreateGame } from './components/CreateGame/CreateGame';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalogue } from './components/Catalogue/Catalogue';
import { GameDetails } from './components/GameDetails/GameDetails';

import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import * as gameService from './services/gameService'

function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(games => setGames(games))
  }, [])

  return (
    <div>

      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/catalogue" element={<Catalogue games={games} />} />
          <Route path="/catalogue/:gameId" element={<GameDetails />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
