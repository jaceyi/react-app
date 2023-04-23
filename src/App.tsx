import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routers, { RouteType } from '@/router';
import NotFound from '@/pages/not-found';
import Layout from './layout';

const App = () => {
  const indexRoute = routers[0];
  if (!indexRoute) return <NotFound />;

  const renderRoute = (route: RouteType) => {
    const { Component, customRoute, customOutlet, children, path } = route;
    if (customRoute && Component) {
      // 自定义路由，子路由也渲染自身组件
      return (
        <Route key={path} path={path}>
          <Route index element={<Component />} path="*" />
        </Route>
      );
    }

    if (children) {
      if (customOutlet) {
        return (
          <Route element={<Component />} key={path} path={path}>
            {children.map(renderRoute)}
            <Route element={<NotFound />} path="*" />
          </Route>
        );
      } else {
        return (
          <Route key={path} path={path}>
            <Route element={<Component />} index key={path} />
            {children.map(renderRoute)}
            <Route element={<NotFound />} path="*" />
          </Route>
        );
      }
    }
    return <Route element={<Component />} key={path} path={path} />;
  };

  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<Navigate replace to={indexRoute.path} />} />
        {routers.map(renderRoute)}
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
};
export default App;
