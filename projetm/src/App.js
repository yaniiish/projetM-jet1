import './App.css';
import React, {useEffect, useState} from 'react';
import data1 from "./TESTP1.json"; 


function App() {



  return (
    <div className="App bg-slate-500 h-screen">
      <header className='flex justify-center items-center	flex-col'>
        <h1 className='text-3xl text-red-700 mt-10 font-bold  mb-8'>CONSIGNES DE TRI EcoDDS - par flux</h1>
        <input className="mb-10 placeholder:italic placeholder:text-slate-400 block bg-white w-1/3 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Produits à recherché" type="text" name="recherche"/>
      </header>
      <div className="container mx-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Bac de tri</th>
            <th className="px-4 py-2">Produits</th>
            <th className="px-4 py-2">EcoDDS ?</th>
            <th className="px-4 py-2">Consigne ou danger particulier</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item["Bac de tri"]}</td>
              <td className="border px-4 py-2">{item["Produits"]}</td>
              <td className="border px-4 py-2">{item["EcoDDS ?"]}</td>
              <td className="border px-4 py-2">{item["Consigne ou danger particulier"]}</td>
            </tr>
          ))}
        </tbody>
        <div className='mt-10'></div>
        <tbody>
          {data1.map((item, index) => (
            <tr key={index} className=''>
              <td className="border px-4 py-2">{item["Bac de tri"]}</td>
              <td className="border px-4 py-2">{item["Produits"]}</td>
              <td className="border px-4 py-2">{item["EcoDDS ?"]}</td>
              <td className="border px-4 py-2">{item["Consigne ou danger particulier"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );

  }
export default App
