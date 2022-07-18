import './App.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div>

      <Header />

      <main id="main-content">
        <Home />
      </main>

    </div>
  );
}

export default App;
