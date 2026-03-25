module.exports = {
    apps: [
        {
            name: "myapp",
            script: "index.js",
            instances: "max",
            exec_mode: "cluster",
            watch: false,
            env: {
                NODE_ENV: "production",
                PORT: 8080
            }

        }
    ]
}