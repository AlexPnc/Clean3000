import { useHistory } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import feuille from './images/logo-clean3000-mini.png'

const App = () => {

  const action = useHistory();
  const goToForm = () => {
    action.push("/remplir");
  }
  const goToHell = () => {
    action.push("/liste");
  }

  return (
    <div className="App">
      <Header />

        <div className="btnRemplir" onClick={() => goToForm()}>
          <img className='feuille' src={feuille} alt="" />
          <h2>Remplir un avis de passage </h2>
        </div>

        <div className="btnListe" onClick={() => goToHell()}>
        <img className='feuille' src={feuille} alt="" />
          <h2>Liste des avis de passage </h2>
        </div>
    </div>
  );
}

export default App;
