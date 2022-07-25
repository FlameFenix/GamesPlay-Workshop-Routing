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
import { EditGame } from './components/EditGame/EditGame';

function App() {

  const [games, setGames] = useState([]);

  const [user, setUser] = useState({
    email: '',
    accessToken: ''
  });

  const userAuthentication = (userData) => {
    console.log(userData);
    setUser(state => ({
      ...state,
      userData
    }));
  }

  const isAuthenticated = () => {
    console.log(user);
    return user.accessToken !== '' ? true : false
  }

  const addGameComment = (gameId, comment) => {

    setGames(state => {

      const game = games.find(x => x._id === gameId);

      const comments = game.comments || [];

      comments.push(comment);

      console.log(game);
      return [
        ...state.filter(x => x._id !== gameId),
        { ...game, comments }
      ]
    })


  }

  const editGameHandler = (gameId, game) => {
    console.log(game, gameId);
    setGames(state => [
      ...state.filter(x => x._id !== gameId),
      game
    ])
  }

  useEffect(() => {
    gameService.getAll()
      .then(games => setGames(games))
  }, [])

  return (
    <div>

      <Header isAuthenticated={isAuthenticated} />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/catalogue" element={<Catalogue games={games} />} />
          <Route path="/catalogue/:gameId" element={<GameDetails games={games} addGameComment={addGameComment} />} />
          <Route path="/edit/:gameId" element={<EditGame games={games} editGameHandler={editGameHandler} />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/login" element={<Login userAuthentication={userAuthentication} />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
