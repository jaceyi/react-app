# react-app

React 初始化项目，配置简易 Webpack，支持 TypeScript、Less、Sass 等。

## 前言
> 项目默认配置有 eslint 如果不需要自行移除，src 目录中有 demo 可供初学，有问题欢迎探讨。

## 安装依赖
```bash
yarn install
```

## 启动本地开发服务
默认端口 8080
```bash
yarn start
```

## 打包编译
默认输出 dist 文件夹
```bash
yarn build
```

## 检查代码格式
配置文件 `.eslintrc` 参考官网 https://eslint.bootcss.com/
```bash
yarn lint
```

## 格式化代码
配置文件 `.perttierrc` 参考官网 https://prettier.io/
```bash
yarn prettier
```

## 备注
> static 为静态资源目录，目录内的资源都会按照原路径 Copy 至 dist 目录。
