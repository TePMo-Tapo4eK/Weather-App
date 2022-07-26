import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [count, setCount] = useState({})

  const key = '5a0960fb89b249703b9bed2168f8e3d3'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=f79d67d9538bf79cc97a94b347320d2c`

  useEffect(()=> {
    axios.get(url).then(data => setCount(data.data))
  }, [])
  return (
    <div className="App">
      <p>{count.name}</p>
      <p>{count.main.temp}</p>
      <p>{count.main.feels_like}</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}

export default App
