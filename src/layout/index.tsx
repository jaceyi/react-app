import React, { useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './style.module.scss';

const { Content } = Layout;

interface PathKeyMap {
  regex: RegExp;
  replace(match: RegExpMatchArray, path: string): string;
}

// 匹配路径及子路由将其转为 Menu Key
const pathKeyMaps: PathKeyMap[] = [
  {
    regex: /\/user\/.+/,
    replace: () => '/user'
  },
  {
    regex: /user-list\/.+/,
    replace: () => '/user-list'
  },
  {
    regex: /user-admin\/.+/,
    replace: () => '/user-admin'
  }
];

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

  const location = useLocation();
  const path = useMemo(() => {
    let match: RegExpMatchArray | null;
    const active = pathKeyMaps.find(
      item => (match = location.pathname.match(item.regex))
    );
    if (active) {
      return active.replace(match!, location.pathname);
    }
    return location.pathname;
  }, [location.pathname]);

  return (
    <Layout>
      <Menu
        mode="horizontal"
        items={items}
        selectedKeys={[path]}
        onClick={handleClickMenu}
      />
      <Content className={styles.container}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MyLayout;
