import { Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const App = () => {

  return (
    <div className="App">
      <Header />

      <Link className='link' to="/remplir">
        <div className="btnRemplir">
          <h2>Remplir un avis de passage </h2>
        </div>
      </Link>

      <Link className='link' to="/liste">
        <div className="btnListe">
          <h2>Liste et détails des avis de passage </h2>
        </div>
      </Link>
    </div>
  );
}

export default App;
