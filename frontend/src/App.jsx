import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store';
import { loadUser } from './actions/Auth';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    
        <div className="App">
          Hello world
        </div>
  );
};

export default App;
