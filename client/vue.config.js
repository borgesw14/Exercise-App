module.exports = {
    outputDir: "../docs",
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:3100'
                }
            }
        }
    }
}