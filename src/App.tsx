import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [count, setCount] = useState({})

  const key = '5a0960fb89b249703b9bed2168f8e3d3'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Yaroslavl&appid=f79d67d9538bf79cc97a94b347320d2c&units=metric`

  useEffect(()=> {
    axios.get(url).then(data => setCount(data.data))
  }, [])

  return (
    <div className="App">
      <h2>{count.name}</h2>
      <h1>{count.temp}</h1>
      {count.main ? <h4>{count.main.temp}</h4> : null}
      {count.main ? <p>{count.main.feels_like}</p> : null}
      {count.main ? <p>{(count.main.pressure * 0.750064)} мм ртутного столба</p> : null}
      {count.weather ? <p>{count.weather[0].main}</p> : null}
      {count.weather ? <p>{count.weather[0].description}</p> : null}
    </div>
  )
}

export default App
