import React from 'react';
import { Avatar, Button } from 'antd';
import { useNavigate } from 'react-router';

const View = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(-1)}>返回</Button>
      <h3>用户头像</h3>
      <Avatar size={64} />
    </div>
  );
};

export default View;
