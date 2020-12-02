import React from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      {routes}
    </div>
  )
}

export default App;