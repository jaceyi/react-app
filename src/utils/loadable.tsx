import React, { lazy, Suspense, ComponentType } from 'react';
import { Spin } from 'antd';

const loadable = ({
  loader
}: {
  loader: () => Promise<{ default: ComponentType<any> }>;
}) => {
  const Component = lazy(loader);

  return (props: any) => {
    return (
      <Suspense fallback={<Spin spinning />}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default loadable;
