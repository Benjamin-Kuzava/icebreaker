import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import LevelBrowse from './components/Browse/Browse.jsx'
import LevelCreate from './components/Create/Create.jsx'
import { baseURL, config } from './services';

const App = () => {
  const [levels, setLevels] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const getLevels = async () => {
      const resp = await axios.get(baseURL, config);
      setLevels(resp.data.records);
      history.push('/');
    }
    getLevels();
  }, [toggleFetch, history]);

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
        <LevelBrowse levels={levels}/>
      </Route>

      <Route path='/select/:id'>
        <LevelBrowse levels={levels}/>
      </Route>
    </div>
  );
}

export default App;
