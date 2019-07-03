import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Body from "./Body";
import Bodymain from "./Bodymain";
import Create from "./Create";
import Read from "./Read";
import Update from "./Update";
import Delete from "./Delete";

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
          <Route path="/Create" component={Create} />
          <Route path="/Read" component={Read} />
          <Route exact path="/Update" component={Update} />
          <Route path="/Delete" component={Delete} />
          <Body />
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
