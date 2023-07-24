import React, { useState ,useEffect} from 'react'; //useEffect import
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
//Remember this takes in two parameters, the first is the function to be executed,
// and the second is the dependency array, and it will check if that changes and if it does
    // then it will execute the function again
    useEffect(() => {

        if (localStorage.getItem('isLoggedIn') === '1') {
            setIsLoggedIn(true);
        }

    }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
      localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
