import './App.css';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

import PrivateRoute from './components/common/PrivateRoute';
import { CreateGame } from './components/CreateGame/CreateGame';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalogue } from './components/Catalogue/Catalogue';
import { GameDetails } from './components/GameDetails/GameDetails';

import { AuthContext } from './contexts/AuthContext';
import { GameContext } from './contexts/GameContext';

import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import * as gameService from './services/gameService'
import { EditGame } from './components/EditGame/EditGame';
import { Logout } from './components/Logout/Logout';

function App() {

  const navigate = useNavigate();

  const [games, setGames] = useState([]);

  const [user, setUser] = useState({});

  const userLogin = (userData) => {
    setUser(state => ({
      ...state,
      ...userData
    }),
      localStorage.setItem('user', JSON.stringify(userData)));
  }

  const userLogout = () => {
    setUser({});
    localStorage.clear();
    navigate('/');
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
    <AuthContext.Provider value={{ user: user, userLogin, userLogout, isAuthenticated: !!user.accessToken }}>
      <div>

        <Header email={user.email} />

        <main id="main-content">
          <GameContext.Provider value={true}>
            <Routes>
              <Route path="/" element={<Home games={games} />} />
              <Route path="/catalogue" element={<Catalogue games={games} />} />
              <Route path="/catalogue/:gameId" element={<GameDetails games={games} addGameComment={addGameComment} />} />
              <Route path="/login" element={<Login userAuthentication={userLogin} />} />
              <Route element={<PrivateRoute />}>
                <Route path="/logout" element={<Logout />} />
                <Route path="/edit/:gameId" element={<EditGame games={games} editGameHandler={editGameHandler} />} />
                <Route path="/create" element={<CreateGame />} />
              </Route>
              <Route path="/register" element={<Register />} />
            </Routes>
          </GameContext.Provider>
        </main>

      </div>
    </AuthContext.Provider >
  );
}

export default App;
