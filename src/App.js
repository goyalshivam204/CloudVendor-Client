import React from 'react';
import VendorList from './components/VendorList/VendorList';
import VendorDetails from './components/VendorDetails/VendorDetails';
import CreateVendor from './components/CreateVendor/CreateVendor';
import UpdateVendor from './components/UpdateVendor/UpdateVendor';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={VendorList} />
          <Route path="/vendors/:id" component={VendorDetails} />
          <Route path="/create" component={CreateVendor} />
          <Route path="/update/:id" component={UpdateVendor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;