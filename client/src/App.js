import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import Grid from './components/Grid/Grid.jsx'
import { baseURL, config } from './services';

const App = () => {
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
      <Header />
      <Route exact path='/'>
        <h1>This is the Home Page</h1>
      </Route>
      <Route path='/new'>
        <h1>This is the Level Create Page</h1>
      </Route>
      <Route path='/select'>
        <h1>This is the Level Select Page</h1>
      </Route>
      <Grid />
    </div>
  );
}

export default App;
