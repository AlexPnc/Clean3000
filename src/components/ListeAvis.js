import React from 'react'
import { useEffect, useState } from 'react';
import Header from './Header';

const ListeAvis = () => {

  const [selectedAvi, setSelectedAvi] = useState({});
  const [avis, SetAvis] = useState([]);

  const getAvis = async () => {
    const json = await fetch("http://localhost:1337/api/avis").then(response => response.json());
    SetAvis(json.data)
  }

  useEffect(() => {
    getAvis();
  }, []);

  const handleChange = (event) => {
    const id = event.target.value;
    const index = avis.findIndex(avi => {
      return avi.id === id;
    });
    setSelectedAvi(avis[index]);
  };

  const selectedAviDisplay = () => {
      return (
        <div className="order-details">
          <h2>Détail de la commande n°{selectedAvi.id}</h2>
        </div>
      );
    }

  const avisList = avis.map(avi => {
    return (
      <option key={avi.id} value={avi.id}>{avi.id}</option>
    );
  });

  return (
    <div className="App">
      <Header />

      <div className="avis-selection">
        <label htmlFor="orderSelect">Sélectionner l'avis de passage :</label>
        <select id="orderSelect" onChange={e => handleChange(e)}>
          <option value=""></option>
          {avisList}
        </select>
      </div>

      <div>
        {selectedAviDisplay()}
      </div>

    </div>

  )
}



export default ListeAvis