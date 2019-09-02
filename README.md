# react-app

React 初始化项目，配置简易 Webpack，支持热更新，支持 TypeScript、Less、Sass 等。

## 前言
> 如果不想用 TypeScript 可以删除相关文件再 Install
* tsconfig.json 文件
* 将 Src 目录中 tsx 文件改为 jsx 文件
* webpack.config.js 中的 TSX loader 部分
* package.json 中如下代码
```json
{
  "dependencies": {
    "@types/react": "^16.9.2",
    "@types/react-dom": "^16.9.0"
  },
  "devDependencies": {
    "ts-loader": "~6.0.4",
    "typescript": "~3.6.2"
  }
}
```

## 安装依赖
```shell script
yarn install
```

## 启动本地开发服务
默认端口 8080
```shell script
yarn start
```

## 打包编译
默认输出 dist 文件夹
```shell script
yarn build
```
## 备注
> Static 为静态资源目录，目录内的资源都会按照原路径 Copy 至 Dist 目录。

> 遇到热更新失败警告，尝试手动刷新页面。

有问题提 Issue。
