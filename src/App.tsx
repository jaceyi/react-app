import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import routers from '@/router';

function App() {
  return (
    <Switch>
      {
        routers.map(page => (
          <Route
            exact
            key={page.path}
            path={page.path}
            component={page.component}/>
        ))
      }
    </Switch>
  );
}

export default App;
