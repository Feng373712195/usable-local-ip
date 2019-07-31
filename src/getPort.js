const portfinder = require("portfinder");

function getPort(startIP = 8000, stopIP = 65535) {
    portfinder.basePort = startIP;
    portfinder.highestPort = stopIP;
    return portfinder.getPortPromise();
}

module.exports = getPort;