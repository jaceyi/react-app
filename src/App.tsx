import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import routers from '@/router';
import store, { IState } from '@/store';

const { useState } = React;

function App() {
  const [state, setState] = useState<IState>({});

  return (
    <store.Provider value={[state, setState]}>
      <Switch>
        {routers.map(page => (
          <Route exact key={page.path} path={page.path} component={page.component} />
        ))}
      </Switch>
    </store.Provider>
  );
}

export default App;
