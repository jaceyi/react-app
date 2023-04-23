import React from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

const { Content } = Layout;

const items = [
  {
    label: '文档',
    key: '/doc'
  },
  {
    label: '普通路由',
    key: '/user'
  },
  {
    label: '嵌套路由',
    key: '/user-admin'
  },
  {
    label: '自定义路由',
    key: '/user-list'
  }
];

const MyLayout = () => {
  const navigate = useNavigate();

  const handleClickMenu = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout>
      <Menu mode="horizontal" items={items} onClick={handleClickMenu} />
      <Content className={styles.container}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MyLayout;
