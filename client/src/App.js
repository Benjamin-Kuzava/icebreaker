import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Browse from './components/Browse/Browse.jsx'
import Create from './components/Create/Create.jsx'
import { baseURL, config } from './services';

const App = () => {
  const [levels, setLevels] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [gridLayout, setGridLayout] = useState('');
  const history = useHistory();

  useEffect(() => {
    const getLevels = async () => {
      const resp = await axios.get(baseURL, config);
      // Sort levels by complexity
      setLevels(resp.data.records.sort((a, b) => 
        (a.fields.width * a.fields.height) - (b.fields.width * b.fields.height)
      ));
      history.push('/');
    };
    getLevels();
  }, [toggleFetch, history]);

  return (
    <div className="App">
        <Header />
      <div className='main-grid'>
  
        <Route exact path='/'> 
          <Home 
            levels={levels}
            setGridLayout={setGridLayout}
          />
        </Route>
  
        <Route path='/new'>
          <Create 
            setToggleFetch={setToggleFetch}
            gridLayout={gridLayout}
            setGridLayout={setGridLayout}
          />
        </Route>
  
        <Route exact path='/select'>
          <Browse levels={levels}/>
        </Route>
  
        <Route path='/select/:id'>
          <Browse levels={levels}/>
        </Route>
      </div>
    </div>
  );
}

export default App;
