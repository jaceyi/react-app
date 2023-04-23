import React from 'react';
import { Table, Button } from 'antd';
import { Link, useRoutes } from 'react-router-dom';
import AddDrawer from './add-drawer';

const UserList = () => {
  let element = useRoutes([
    {
      path: 'add',
      element: <AddDrawer />
    }
  ]);

  return (
    <div>
      {element}
      <Table
        title={() => (
          <Link to="add">
            <Button type="primary">新增用户</Button>
          </Link>
        )}
      />
    </div>
  );
};

export default UserList;
