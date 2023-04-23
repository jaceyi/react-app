import React from 'react';
import { useParams } from 'react-router';
import { Card } from 'antd';

const UserDetail = () => {
  const { uid } = useParams();

  return (
    <Card>
      用户 <span className="light">{uid}</span> 详情
    </Card>
  );
};

export default UserDetail;
