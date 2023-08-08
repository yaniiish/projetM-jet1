import './App.css';
import React, {useEffect, useState} from 'react';



function App() {

  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:8081/produit")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])


  return (
    <div className="App bg-slate-500 h-screen">
      <header className='flex justify-center items-center	flex-col'>
        <h1 className='text-3xl font-bold underline mb-8'>Projet M</h1>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/3 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Produits à recherché" type="text" name="recherche"/>
      </header>
      <div id='data'>
          {data.map((d, i) => (
              <div key={i} className='mb-8 mt-8 text-center w-40 rounded overflow-hidden shadow-lg'>
                <div>{d.nom}</div>
                <div>{d.bac_id}</div>
              </div>            
          ))}
      </div>
    </div>
  );

  }
export default App
