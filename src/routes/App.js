import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Pages
import Home from '../pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product_detail" component={ProductDetail} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
