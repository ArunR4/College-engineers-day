import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'
import Spinner from './component/Spinner/Spinner';
import Card from "./component/Card/Card"


function App() {
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [dep, setDep] = useState("")

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL).then(res => {
      localStorage.setItem("eng001", JSON.stringify(res.data));
      setData(res.data);
    }).catch(err => console.log(err))
  }, [])

  const searchNameHandler = e => {
    setName(e.target.value);
  }

  const eventToLetter = str => {
    let value = ""
    if (str.includes("Web Designing")) {
      value += "W"
    }
    if (str.includes("Web Development")) {
      value += "W"
    }
    if (str.includes("Codester")) {
      value += "C"
    }
    if (str.includes("Project Expo")) {
      value += "P"
    }
    if (str.includes("What happen next")) {
      value += "F"
    }
    if (str.includes("Connection")) {
      value += "X"
    }
    if (str.includes("Art Battle")) {
      value += "D"
    }
    return value;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>AAMEC RESPONSES</h1>
        {data && <h3>Number of Response : {data.length}</h3>}
      </div>

      <div className='tools'>
        <input type="text" placeholder='Search by Name' value={name} onChange={searchNameHandler} />
        <select onChange={e => setDep(e.target.value)}>

          <option value="">Events</option>
          <option value="Web">Web Design</option>
          <option value="Codester">Code</option>
          <option value="Project Expo">Project Expo</option>
          <option value="What happen next">Prediction</option>
          <option value="Connection">Connection</option>
          <option value="Art Battle">Drawing</option>

        </select>
      </div>

      <div className='container'>
        {data ? data.filter(el => {
          return el['Choose Event'].includes(dep);
        }).filter(el => {
          const dataName = el.Name.toLowerCase();
          return dataName.includes(name.toLocaleLowerCase())
        }).map(el => (
          <Card name={el.Name} dep={el.Department} year={el.Year} key={data.indexOf(el)} id={data.indexOf(el)} event={eventToLetter(el['Choose Event'])} />
        )) : <Spinner />}
      </div >

    </div>
  );
}

export default App;
