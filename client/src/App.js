import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import { baseURL, config } from './services';

function App() {

  useEffect(() => {
    const getLevels = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
    }
    getLevels();
  }, [])

  return (
    <div className="App">
      <h1>test</h1>
    </div>
  );
}

export default App;
