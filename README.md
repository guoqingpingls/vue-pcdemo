# pcdemo

> this is a pcdemo of vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

目前使用的json-server 模拟后台数据，但是json-server的post请求会修改db的数据，（和后台相关，暂时不解），所以该demo涉及到请求数据暂时使用的get方法