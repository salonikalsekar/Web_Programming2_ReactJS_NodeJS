import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './App.css';
import logo from './logo.jpg';

import {Pokemons} from './routes/pokemon';
import {Berries} from './routes/berries';
import {Machines} from './routes/machines';
import singlePokemonContainer from './routes/pokemon/singlePokemon/singlePokemonContainer';
import singleBerryContainer from './routes/berries/singleBerry/singleBerryContainer';
import singleMachineContainer from './routes/machines/singleMachine/singleMachineContainer';

import home from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo"/> */}
            <h1 className="App-title">
              <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
            </h1>
         

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/pokemon/page/1">Pokemon</Link>
                </li>
                <li>
                  <Link to="/berry/page/1">Berry</Link>
                </li>
                <li>
                  <Link to="/machines/page/1">Machine</Link>
                </li>
              </ul>
            </nav>

          </header>

          <div className="App-body">
            <Route exact path="/" component={home}/>
            <Route exact path="/pokemon/page/:id" component={Pokemons}/>
            <Route exact path="/pokemon/:id" component={singlePokemonContainer}/>
            <Route exact path="/berry/page/:id" component={Berries}/>
            <Route exact path="/berry/:id" component={singleBerryContainer}/>
            <Route exact path="/machines/page/:id" component={Machines}/>
            <Route exact path="/machines/:id" component={singleMachineContainer}/>

          </div>
          <footer className="App-footer"></footer>
        </div>

      </Router>
    );
  }
}

export default App;
