import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Body from "./Body";
import Bodymain from "./Bodymain";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";
import Creepers from "./Creepers";

// const User = params => {
//   return <h1> Welcome User {params.username} </h1>;
// };

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <div id="menu">
          <Nav />
        </div>
        <div className="Viewspage">
          <Route exact path="/Create" component={Create} />
          <Route exact path="/Read" component={Read} />
          <Route exact path="/Update" component={Update} />
          <Route exact path="/Delete" component={Delete} />
          <Route exact path="/Creepers" component={Creepers} />
          <div>
            <Body />
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
