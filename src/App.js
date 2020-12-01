import React from 'react';
import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import routes from './routes';
import Header from './components/Header/Header'
// import Form from './Components/Form/Form';
// import Post from './Components/Post/Post';
// import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className="App">
        <Auth/>
      </div>
      {routes}
    </div>
  )
}

export default App;