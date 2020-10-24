import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Edit from './components/Edit';

import Header from './components/Header';

import Home from './components/Home';
import NewProduct from './components/NewProduct';

import './css/layout.css';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
          <Header/>
          <h1 className="text-3xl text-center py-4">Inventory Management System</h1>
          <main>
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/addproduct">
                <NewProduct />
              </Route>
              <Route path="/edit/:id">
                <Edit/>
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
    );
  }

}

export default App;
