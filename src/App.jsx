import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('');
  const fetchQuote = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      setQuote(response.data.slip.advice);
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  useEffect(fetchQuote,[])

  return (
    <div className='card'>
        <h1 className='quote'>
            {quote}
        </h1>
        <button onClick={fetchQuote}>Generate</button>
    </div>
  )
}

export default App
