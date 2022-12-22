import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const url = 'YOUR_BASE_URL_HERE'
    const config = {
      headers: {
        access_token: 'YOUR_ACCESS_TOKEN_HERE'
      }
    }
    axios.get(`${url}/YOUR/ROUTE/API/HERE`, config)
      .then(res => {
        const temporaryCars = res.data.cars
        console.log(temporaryCars)
        setCars(temporaryCars)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      {cars?.map(car => {
        return (
          <div key={car.id}>
            <img src={car.image} alt="gambar-mobilenya" />
            <h1>{car.name}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default App;
