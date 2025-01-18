const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig,
    {
        mode: "development",
        devtool: "source-map",
        devServer: {
            compress: true,
            hot: true,
            port: 3163,
            open: true,
            proxy: [
                {
                    context: ["/]"],
                    target: "https://localhost:8326/",
                }
            ],
            devMiddleware: {
                publicPath: "/"
            },
            static: {
                staticOptions: {
                    contentBase: path.resolve(__dirname, "./AppScripts/src"),
                    watchContentBase: true,
                }
            }
        },
        module: {
            rules: [
                //rules for ts-loader
                {
                    test: /\.tsx?$/,
                    exclude: [/node_modules/, /\.test.tsx?$/],
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true,
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "HomePage.html",
                inject: true,
                template: join(__dirname, "./AppScripts/devServer/homePage.html"),
                chunks: ["HomePage"]
            }),
            new HtmlWebpackPlugin({
                filename: "ContactPage.html",
                inject: true,
                template: join(__dirname, "./AppScripts/devServer/contactPage.html"),
                chunks: ["ContactPage"]
            }),
            new HtmlWebpackPlugin({
                filename: "InfoPage.html",
                inject: true,
                template: join(__dirname, "./AppScripts/devServer/infoPage.html"),
                chunks: ["InfoPage"]
            }),
            new HtmlWebpackPlugin({
                filename: "ProjectPage.html",
                inject: true,
                template: join(__dirname, "./AppScripts/devServer/projectPage.html"),
                chunks: ["ProjectPage"]
            })
        ]
    });
