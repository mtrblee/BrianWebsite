const path = require("path");
const webpack = require("webpack");

const ROOT = path.resolve(__dirname, "AppScripts");
const DESTINATION = path.resolve(__dirname, "wwwroot");

module.exports =
{
    mode: 'production',
    entry: {
        HomePage: "./AppScripts/src/pages/HomePage.tsx",
        ContactPage: "./AppScripts/src/pages/ContactPage.tsx",
        InfoPage: "./AppScripts/src/pages/InfoPage.tsx",
        ProjectPage: "./AppScripts/src/pages/ProjectPage.tsx"
    },
    output: {
        path: path.join(DESTINATION, "dist"),
        filename: "[name].js" //bundle name
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/, /\.text.tsx?$/],
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".json", ".jsx", ".tsx"] //compatible file extensions list
    }
};