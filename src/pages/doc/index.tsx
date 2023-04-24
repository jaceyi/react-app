import React from 'react';
import { Card, Divider } from 'antd';
import styles from './style.module.scss';

const Doc = () => {
  return (
    <Card title="文档" className={styles.container}>
      <h3>目录结构</h3>
      <pre>
        <code>
          {`
├── public
├── src
│   ├── hooks // 常用自定义 hooks
│   ├── layout // 全局 layout
│   ├── pages // 路由页面
│   │   └── index.ts // 索引跟页面
│   ├── styles // 全局样式
│   ├── utils // 工具
│   ├── config.json // 配置文件
│   └── router.ts // 路由配置文件
└── webpack
          `}
        </code>
      </pre>
      <Divider />
      <h3>路由使用</h3>
      <p>
        内置三种路由使用的方法，满足各种自定义需求，请参考<code>pages</code>
        文件夹下
        <span style={{ margin: '0 6px' }}>
          <code>user</code>
          <code>user-admin</code>
          <code>user-list</code>
        </span>
        的使用。
      </p>
      <p>
        <code>src/router.ts</code> 是路由配置文件，特殊注意的两个参数：
      </p>
      <ul>
        <li>
          <code>customOutlet: true</code>表示组件内部有自定义
          <code>&lt;Outlet /&gt;</code>
          ，可以实现嵌套渲染，在页面内某个地方渲染路由；
        </li>
        <li>
          <code>customRoute: true</code>表示组件内部有自定义路由，可以使用
          React-Router 的<code>useRoutes</code> 自定义路由组件渲染，相比
          <code>customOutlet</code>
          更加自由，还可以接收到子路由传递给外层的回调。
        </li>
      </ul>
    </Card>
  );
};

export default Doc;
