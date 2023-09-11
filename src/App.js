import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'
import Card from "./component/Card/Card"


function App() {
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [dep, setDep] = useState("")

  useEffect(() => {
    axios.get("https://sheetdb.io/api/v1/k8mj1pd1lj09a").then(res => {
      setData(res.data);
    }).catch(err => console.log(err))
  }, [])

  const searchNameHandler = e => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>AAMEC RESPONCES</h1>
      </div>

      <div className='tools'>
        <input type="text" placeholder='Search by Name' value={name} onChange={searchNameHandler} />
        <select onChange={e => setDep(e.target.value)}>

          <option value="Web Designing">Web Design</option>
          <option value="Codester">Code</option>
          <option value="Project Expo">Project Explo</option>
          <option value="Web Designing">Prediction</option>
          <option value="What happen next">Connection</option>
          <option value="Art Battle">Drawing</option>

        </select>
      </div>

      <div className='container'>
        {data && data.filter(el => {
          return el['Choose Event'].includes(dep);
        }).filter(el => {
          const dataName = el.Name.toLowerCase();
          return dataName.startsWith(name)
        }).map(el => (
          <Card name={el.Name} dep={el.Department} year={el.Year} key={data.indexOf(el)} id={data.indexOf(el)} />
        ))}
      </div >
    </div>
  );
}

export default App;
