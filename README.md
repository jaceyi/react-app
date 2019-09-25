# react-app

React 初始化项目，配置简易 Webpack，支持 TypeScript、Less、Sass 等。

## 前言
> 如果不想用 TypeScript 可以将 src 目录中 tsx 文件改为 jsx 文件，并且再删除 TypeScript 相关依赖（删除信息如下）
* tsconfig.json 文件
* webpack.common.js 中的 tsx loader 部分
* package.json 中如下代码
```json
{
  "dependencies": {
    "@types/react": "^16.9.2",
    "@types/react-dom": "^16.9.0"
  },
  "devDependencies": {
    "ts-loader": "^6.0.4",
    "typescript": "^3.6.2"
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

## 格式化代码
配置文件 `.perttierrc` 参考官网 https://prettier.io/
```shell script
yarn prettier
```

## 备注
> Static 为静态资源目录，目录内的资源都会按照原路径 Copy 至 Dist 目录。

有问题提 Issue。
