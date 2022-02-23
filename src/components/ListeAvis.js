import React from 'react'
import { useEffect, useState } from 'react';
import Header from './Header';

const ListeAvis = () => {

  const [avis, setAvis] = useState([]);

  const getAvis = async () => {
    const json = await fetch("http://localhost:1337/api/avis").then(response => response.json());
    setAvis(json.data)
  }

  useEffect(() => {
    getAvis();
  }, []);

  const deleteTodo = (item) => {

    const copyAvis = [...avis];
    let position = copyAvis.indexOf(item);
    copyAvis.splice(position, 1);
    setAvis(copyAvis);
  }

  console.log(avis);

  const renderAvis = () => {
    const listAvis = avis.map(item => {
      return (
        <div>
          {item.attributes.name} - {item.attributes.date} {item.attributes.observation} { }
        </div>
      );
    });
    return (
      <div className="listAvis">
        <h2>La liste des avis de passage : </h2>

        {listAvis}


      </div >

    );

  }

  return (
    <div className="App">
      <Header />
      {renderAvis()}
    </div>

  )
}



export default ListeAvis