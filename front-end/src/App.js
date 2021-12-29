import logo from './logo.svg';
import { useEffect, useState } from 'react';
import api from './api';
import './App.css';

function App() {
  const [information, setInformation] = useState("Nothing fetched yet!");
  
  const fetchData = (e) => {
    e.preventDefault()
    api.getData()
    .then((response)=>{
        setInformation(response.data)
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  const postData = (e) => {
    e.preventDefault()
    api.postData()
    .then((response)=>{
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={(e) => fetchData(e)} style={{cursor: "pointer"}}>
          Click on me to fetch information from database.
        </p>
        <p >
          {JSON.stringify(information)}
        </p>
        <p onClick={(e) => postData(e)} style={{cursor: "pointer"}}>
          Click on me to make a post call to api.
        </p>
      </header>
    </div>
  );
}

export default App;
