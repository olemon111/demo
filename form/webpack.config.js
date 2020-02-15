/*
 * @Author: your name
 * @Date: 2020-02-05 18:28:48
 * @LastEditTime : 2020-02-06 01:18:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lesson1\webpack.config.js
 */
const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		bundle: "./js/index.js"
	},
	module: {
		rules: [
			// {
			// 	test: /\.(png|jpg|gif)$/,
			// 	use: {
			// 		loader: "url-loader",
			// 		options: {
			// 			//placeholder
			// 			name: "[name]_[hash].[ext]",
			// 			outputPath: "images/",
			// 			limit: 20480
			// 		}
			// 	}
			// },
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
			// {
			// 	test: /\.scss$/,
			// 	use: [
			// 		"style-loader",
			// 		{
			// 			loader: "css-loader",
			// 			options: {
			// 				importLoaders: 2
			// 				// modules: true
			// 			}
			// 		},
			// 		"sass-loader",
			// 		"postcss-loader"
			// 	]
			// },
			// {
			// 	test: /\.(eot|ttf|svg|woff)$/,
			// 	use: {
			// 		//file-loader
			// 		loader: "url-loader"
			// 	}
			// }
		]
	},
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		template: "src/index.html"
	// 	}),
	// 	new CleanWebpackPlugin()
	// ],
	//clean-webpack-plugin在打包之前运行，删除dist文件夹
	//Html-webpack-plugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
	output: {
		publicPath: "",
		filename: "[name].js",
		path: path.resolve(__dirname, "bundle")
	}
};
