import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import routers from '@/router';
import * as styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        {routers.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  );
};
export default App;
