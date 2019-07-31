function getLocalIP() {
    const os = require("os");
    const interfaces = os.networkInterfaces();
    let ip = "127.0.0.1";
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
                ip = alias.address;
            }
        }
    }
    return ip;
}

module.exports = getLocalIP;