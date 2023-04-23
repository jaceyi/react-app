
import React from 'react';
import { Button, Drawer } from 'antd';
import { useNavigate } from 'react-router';

const AddDrawer = () => {
  const navigate = useNavigate();
  const onClose = () => navigate('/user-list');
  return (
    <Drawer title="新增用户" open onClose={onClose}>
      <Button onClick={onClose} type="primary">
        提交
      </Button>
    </Drawer>
  );
};

export default AddDrawer;
