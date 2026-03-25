module.exports = {
    apps: [
        {
            name: "myapp",
            script: "index.js",
            instances: "max",
            exec_mode: "clustor",
            watch: false,
            env: {
                NODE_ENV: "production",
                PORT: 8080
            }

        }
    ]
}