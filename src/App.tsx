import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { useLocation } from 'react-router';
import routers from '@/router';
import * as styles from './app.scss';

const App = () => {
  const location = useLocation();

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' }
  });

  return (
    <div className={styles.app}>
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              {routers.map(page => (
                <Route
                  exact
                  key={page.path}
                  path={page.path}
                  component={page.component}
                />
              ))}
            </Switch>
          </animated.div>
        );
      })}
    </div>
  );
};
export default hot(App);
