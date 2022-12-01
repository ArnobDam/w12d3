import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import Navigation from './components/Navigation';
import SignupFormPage from './components/SignupFormPage';

const Carrot = () => (
  <div style={{ color: "orange", fontSize: "100px" }}>
    <i className="fa-solid fa-carrot"></i>
  </div>
);

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/login">
            <Carrot />
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
    </Switch>
    </>
  );
}

export default App;