var path = require("path");
var webpack = require("webpack");
module.exports = {
    //入口
    entry : {
        main:path.join(__dirname,"public/js/main.js")

    },

    //输出
    output : {
        path : path.join(__dirname,"public/dist"),
        filename : "[name].bundle.js"
    },
    module : {
        loaders : [
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/\.js$/,exclude:/node_modules/,loader:"babel-loader"
            ,query:{presets:['es2015','react']}}
        ]
    },
    resolve : {
        alias : {
            tools:"../common/tools",
            store:"../common/store",
            Index:"../index/Index.js",
            Manage:"../index/Manage.js",
            Student:"../student/Student",
            Teacher:"../teacher/Teacher",
            Course:"../course/Course"
        }
    }
}
