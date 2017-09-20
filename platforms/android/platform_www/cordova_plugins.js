cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "com.dbaq.cordova.filepickerio.filepickerio",
        "file": "plugins/com.dbaq.cordova.filepickerio/www/filepickerio.js",
        "pluginId": "com.dbaq.cordova.filepickerio",
        "clobbers": [
            "window.filepicker"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-network-information": "1.2.1",
    "cordova-plugin-console": "1.0.7",
    "com.dbaq.cordova.filepickerio": "0.0.7"
};
// BOTTOM OF METADATA
});