import { ComponentType } from 'react';
import loadable from '@/utils/loadable';
import Doc from '@/pages/doc';

export interface RouteType {
  name: string;
  path: string;
  Component: ComponentType<any>;
  children?: RouteType[];
  customOutlet?: boolean;
  customRoute?: boolean;
}
export type RouteLists = RouteType[];

const routes: RouteLists = [
  {
    name: '文档',
    path: '/doc',
    Component: Doc
  },
  {
    name: '用户中心',
    path: '/user',
    Component: loadable({
      loader: () => import('@/pages/user')
    }),
    children: [
      {
        path: ':uid',
        Component: loadable({
          loader: () => import('@/pages/user/detail')
        }),
        name: 'User Detail'
      }
    ]
  },
  {
    name: '用户管理',
    path: '/user-admin',
    Component: loadable({
      loader: () => import('@/pages/user-admin')
    }),
    customOutlet: true,
    children: [
      {
        path: 'view',
        Component: loadable({
          loader: () => import('@/pages/user-admin/view')
        }),
        name: '查看用户'
      }
    ]
  },
  {
    name: '用户列表',
    path: '/user-list',
    Component: loadable({
      loader: () => import('@/pages/user-list')
    }),
    customRoute: true
  }
];

export default routes;
