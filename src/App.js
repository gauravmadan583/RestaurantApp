import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <Main/>
      </div>
    );}
}

export default App;
