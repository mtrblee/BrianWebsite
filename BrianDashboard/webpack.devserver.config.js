const path = require("path");
const webpack = require("webpack")

const ROOT = path.resolve(__dirname, "AppScripts");
const DESTINATION = path.resolve(__dirname, "wwwroot");

module.exports =
{
    entry:
    {
        HomePage: "./AppScripts/src/pages/HomePage.tsx"
    },
    mode: 'development',
    output:
    {
        path: path.join(DESTINATION, "dist"),
        filename: "reactapp.bundle.js" //bundle name
    },
    module:
    {
        rules:
        [
            {
                test: /\.(js | jsx)$/,
                exclude: / node_modules /,
                use:
                {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        compress: true,
        hot: true,
        port: 3163,
        open: true,
        proxy: [
            {
                context: ['/'],
                target: 'https://localhost:8326'
            }
        ],
        devMiddleware: {
            publicPath: "/"
        }
    },
    resolve:
    {
        extensions: [".js", ".ts", ".json", ".jsx", ".tsx"] //compatible file extensions list
    }
};