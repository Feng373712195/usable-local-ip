const getIP = require("./getIP");
const getPort = require("./getPort");

const IPRegExp = /((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/;

async function autoGetIP({
    host,
    port = true,
    stopProt
} = {}) {
    if (!host || !IPRegExp.test(host)) {
        host = getIP();
    }
    if (port) {
        prot = typeof port === "boolean" ? undefined : port;
        if (port && !/[0-9]+/.test(port)) {
            port = undefined;
        }
        port = await getPort(port, stopProt);
    }
    return {
        host,
        port: port ? port : "",
        ip: `${host}${port ? ":" + port : ""}`
    };
}

module.exports = autoGetIP;