import './App.css';
import React, {useEffect, useState} from 'react';
import data1 from "./data/Page1j.json"; 
import data2 from "./data/Page2j.json";
import data3 from "./data/Page3j.json";
import data4 from "./data/Page4j.json";
import data5 from "./data/Page5j.json";
import data6 from "./data/Page6j.json";
import data7 from "./data/Page7j.json";
import data8 from "./data/Page8j.json";
import data9 from "./data/Page9j.json";
import data10 from "./data/Page10j.json";









function App() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');


  // Vos données data1 et data2

  // Fonction pour mettre à jour la valeur de la barre de recherche
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    // Effectuer la recherche automatiquement lorsque la valeur de la barre de recherche change
    if (searchValue.length >= 3) {
      // Filtrer les données en fonction de la recherche
      const filtered = [...data1, ...data2,...data3,...data4,...data5,...data6,...data7,...data8,...data9,...data10].filter((item) =>
        item["Produits"].toLowerCase().includes(searchValue.toLowerCase())
      );

      // Trier les données filtrées par ordre alphabétique
      const sortedData = [...filtered].sort((a, b) => {
        const productA = a["Produits"].toLowerCase();
        const productB = b["Produits"].toLowerCase();
        if (sortOrder === 'asc') {
          return productA.localeCompare(productB);
        } else {
          return productB.localeCompare(productA);
        }
      });

      setFilteredData(sortedData);
    } else {
      // Réinitialiser les données filtrées si la recherche est vide ou a moins de 3 caractères
      setFilteredData([]);
    }
  }, [searchValue, sortOrder]);

  return (
    <div className="App bg-slate-500 min-h-screen">
      <header className='flex justify-center mb-10 items-center	flex-col sticky top-0'>
        <h1 className='text-3xl text-red-700 mt-10 font-bold  mb-8'>CONSIGNES DE TRI EcoDDS - par flux</h1>
        <input className="mb-10 placeholder:italic placeholder:text-slate-400 block bg-white w-1/3 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Produits à recherché" 
        type="text" 
        value={searchValue}
        onChange={handleSearchChange}
        name="recherche"
        />
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
          
        {(filteredData.length > 0 ? filteredData : [...data1, ...data2,...data3,...data4,...data5,...data6,...data7,...data8,...data9,...data10]).map((item, index) => (
      <tr key={index}>
        <td className={`border px-4 py-2`} style={{ backgroundColor: item["Couleur"] }}>{item["Bac de tri"]}</td>
        <td className="border px-4 py-2">{item["Produits"]}</td>
        <td className="border px-4 py-2">{item["EcoDDS ?"]}</td>
        <td className="border px-4 py-2">{item["Consigne ou danger particulier"]}</td>
      </tr>
    ))}
        </tbody>

        {/* <div className='mt-10'></div>
        <tbody>
          {data2.map((item, index) => (
            <tr key={index} className=''>
              <td className={`border px-4 py-2`} style={{ backgroundColor: item["Couleur"] }}>{item["Bac de tri"]}</td>
              <td className="border px-4 py-2">{item["Produits"]}</td>
              <td className="border px-4 py-2">{item["EcoDDS ?"]}</td>
              <td className="border px-4 py-2">{item["Consigne ou danger particulier"]}</td>
            </tr>
          ))}
        </tbody>

        <div className='mt-10'></div>
        <tbody>
          {data3.map((item, index) => (
            <tr key={index} className=''>
              <td className={`border px-4 py-2`} style={{ backgroundColor: item["Couleur"] }}>{item["Bac de tri"]}</td>
              <td className="border px-4 py-2">{item["Produits"]}</td>
              <td className="border px-4 py-2">{item["EcoDDS ?"]}</td>
              <td className="border px-4 py-2">{item["Consigne ou danger particulier"]}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
    </div>
  );

  }
export default App
