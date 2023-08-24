import './App.css';
import React, {useEffect, useState} from 'react';



function App() {



  return (
    <div className="App bg-slate-500 h-screen">
      <header className='flex justify-center items-center	flex-col'>
        <h1 className='text-3xl font-bold underline mb-8'>Projet M</h1>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/3 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Produits à recherché" type="text" name="recherche"/>
      </header>
      <div id="ajout">

      </div>
   
    </div>
  );

  }
export default App
