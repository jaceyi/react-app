import React from 'react';
import { Card, Button } from 'antd';
import { Outlet, Link } from 'react-router-dom';

const UserAdmin = () => {
  return (
    <Card
      title={
        <Link to="view">
          <Button type="primary">查看用户</Button>
        </Link>
      }
    >
      <Card>
        <Outlet />
      </Card>
    </Card>
  );
};

export default UserAdmin;
