import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Head} from "./component/Head";
import {Main} from "./component/Main";

function App() {
  return (
      <BrowserRouter>
        <Head/>
        <Switch>
          <Route path={'/'} exact component={Main}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
