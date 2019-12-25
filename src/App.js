import React from 'react';
import './App.css';
import Shop from './__containers/shop'
import Header from './__containers/header';

class App extends React.Component {
  render() {
    return (
      <div id='beer-shop'>
        <Header />
        <Shop />
      </div>
    )
  }
}

export default App;
