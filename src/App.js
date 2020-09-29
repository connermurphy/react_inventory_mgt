import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './components/Home';
import NewProduct from './components/NewProduct';

import Alert from './components/Alert';

import './css/layout.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products : localStorage.getItem("products") == null ? [] : JSON.parse(localStorage.getItem("products"))
    }

  }
 
  render() {

    return (
      <BrowserRouter>
          <Header/>
          <h1 className="text-3xl text-center py-4">Inventory Management System</h1>
          <main>
            <Switch>
              <Route exact path="/">
                {this.state.products.length > 0 ? <Home data={this.state.products}/> : <Alert type="info" msg="There are no products available!" />}
              </Route>
              <Route path="/addproduct">
                <NewProduct />
              </Route>
            </Switch>
          </main>
        </BrowserRouter>
    );
  }

}

export default App;
