import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { baseURL, config } from './services';

function App() {
  const [levels, setLevels] = useState([])

  useEffect(() => {
    const getLevels = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setLevels(resp.data.records);
    }
    getLevels();
  }, []);

  return (
    <div className="App">
      <Route exact path='/'>
        <h1>This is the Home Page</h1>
      </Route>
      <Route path='/new'>
        <h2>This is the Level Create Page</h2>
      </Route>
      <Route path='/select'>
        <h2>This is the Level Select Page</h2>
      </Route>
    </div>
  );
}

export default App;
