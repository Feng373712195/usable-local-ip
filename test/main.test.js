const http = require('http');
const autoGetIp = require('../src/index');

const openHttpServer = () => {
  return new Promise(async resvloe => {
    const ipInfo = await autoGetIp()
    let server = http.createServer();
    server.listen(ipInfo.port, ipInfo.host, (err) => {
      resvloe(ipInfo);
    });
  })
}

test('test auto get ip', async (done) => {
  const ipInfo = await autoGetIp()
  expect(ipInfo.host.split('.').length).toBe(4);
  expect(ipInfo.port > 0).toBeTruthy();
  expect(ipInfo.ip).toBe(`${ipInfo.host}:${ipInfo.port}`);
  done();
});

test('test auto get ip', async (done) => {
  const ipInfo = await autoGetIp({
    host: 'is worong host'
  })
  expect(ipInfo.host.split('.').length).toBe(4);
  expect(ipInfo.port > 0).toBeTruthy();
  expect(ipInfo.ip).toBe(`${ipInfo.host}:${ipInfo.port}`);
  done();
});

test('test auto get ip', async (done) => {
  const ipInfo = await autoGetIp({
    port: 'is worong port'
  })
  expect(ipInfo.host.split('.').length).toBe(4);
  expect(ipInfo.port > 0).toBeTruthy();
  expect(ipInfo.ip).toBe(`${ipInfo.host}:${ipInfo.port}`);
  done();
});

test('test get not prot of ip', async (done) => {
  const ipInfo = await autoGetIp({
    port: false
  })
  expect(ipInfo.port).toBe('');
  done();
});

test('test have parems get ip', async (done) => {
  const ipInfo = await autoGetIp({
    host: "127.0.0.5",
    port: "9999"
  })
  expect(ipInfo.host).toBe("127.0.0.5");
  expect(ipInfo.port).toBe(9999);
  expect(ipInfo.ip).toBe("127.0.0.5:9999");
  done();
});

test('test auto get prot', async (done) => {
  const ports = [];
  for (let i = 0; i < 10; i++) {
    const ipInfo = await openHttpServer()
    ports.push(ipInfo.port);
  }
  expect([...new Set(ports)].length).toBe(10)
  done();
})