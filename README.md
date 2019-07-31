# usable-local-ip [![NPM version][npm-image]][npm-url]

> 自动获取本地 IP 地址与可用端口。通常用来开启本地服务器使用，不用再去手动配置。

## Usage

```shell
npm install --save-dev usable-local-ip
```

## Example

模块结果会返回 Promise
resolve 结果会返回 ip、host、port
reject 结果会返回失败原因

开启 node 服务器

```javascript
const http = require("node");
const autoGetIP = require("usable-local-ip");
let server = http.createServer();
autoGetIP().then(ipInfo => server.listen(ipInfo.port, ipInfo.host));
```

配置 webpack devServer

```javascript
// webpackConfig
const autoGetIP = require("usable-local-ip");
// 你的webpack配置
const webpackConfig = {...}
module.exports = autoGetIP().then(ipInfo => {
  webpackConfig.devServer.host = ipInfo.host;
  webpackConfig.devServer.port = Number(ipInfo.port);
  return devConfig;
});
```

other

```javascript
// 只是想获取ip
const ip = require("usable-local-ip/src/getIP");
// 只是想获取端口
const port = require("usable-local-ip/src/getPort");
```

## Parames

### options

Type: `Object`
Require: `false`

#### options.host

Type: `String`
Require: `false`

传入 host 参数则不会去自动获取，使用传入的 host

#### options.port

Type: `Boolean || Number || String`
Require: `false`
Default: `8000`

传入 port 参数则会以 port 参数往上搜寻可用端口
传入 false 则不获取端口号

#### options.stopPort

Type: `Number || String`
Require: `false`
Default: `65535`

传入 stopProt 参数会搜寻到这个端口之后停止搜寻

## Test

```shell
npm test
```

[npm-url]: https://npmjs.org/package/usable-local-ip
[npm-image]: https://badge.fury.io/js/usable-local-ip.svg
