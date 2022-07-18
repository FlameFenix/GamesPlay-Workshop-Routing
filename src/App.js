import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Routes, Route } from 'react-router-dom'
import { CreateGame } from './components/CreateGame/CreateGame';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Catalogue } from './components/Catalogue/Catalogue';

function App() {
  return (
    <div>

      <Header />

      <main id="main-content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="/create" element={<CreateGame />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;
