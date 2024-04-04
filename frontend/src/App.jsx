import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store';
import { loadUser } from './actions/Auth';
import LoginModal from './components/auth/loginModal';
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
        <div className="App">
          <LoginModal/>
        </div>
  );
};

export default App;
