import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
   
      <Router>
        <>
        THIS IS MY PAGE???
         {/* <Navbar /> */}
          <Switch>
            {/* <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
          </Switch>
        </>
      </Router>
  );
}

export default App;