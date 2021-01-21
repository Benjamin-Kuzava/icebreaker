import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import LevelCreate from './components/LevelCreate/LevelCreate.jsx'
import { baseURL, config } from './services';

const App = () => {
  const [levels, setLevels] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const getLevels = async () => {
      const resp = await axios.get(baseURL, config);
      setLevels(resp.data.records);
    }
    getLevels();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
        <Home levels={levels} />
      </Route>
      <Route path='/new'>
        <LevelCreate setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path='/select'>
      </Route>
    </div>
  );
}

export default App;
