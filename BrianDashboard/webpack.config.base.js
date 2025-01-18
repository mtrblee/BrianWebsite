const path = require("path")

module.exports =
{
    entry: {
        contactPage: "./AppScripts/src/ContactPage.tsx",
        homePage: "./AppScripts/src/HomePage.tsx",
        infoPage: "./AppScripts/src/InfoPage.tsx",
        projectPage: "./AppScripts/src/ProjectPage.tsx"
    },
    output: {
        path: path.join(__dirname, "wwwroot/dist"),
        filename: "[name].js", //bundle name
        libraryTarget: "commonjs2"
    },
    resolve: {
        extensions: [".js", ".ts", ".json", ".jsx", ".tsx"] //compatible file extensions list
    }
};