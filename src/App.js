import React from 'react';
import GlobalStyle from './components/globalStyle/GlobalStyle';
import Header from './components/header/Header';
import LoginContainer from './components/loginContainer/LoginContainer';
import RegisterForm from './components/registerForm/RegisterForm';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <LoginContainer />
    </div>
  );
}

export default App;
