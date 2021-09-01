import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import routers from '@/router';
import * as styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Switch>
        {routers.map(page => (
          <Route
            exact
            key={page.path}
            path={page.path}
            component={page.component}
          />
        ))}
      </Switch>
    </div>
  );
};
export default App;
