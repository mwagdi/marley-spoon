const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	devServer: {
		contentBase: "./dist"
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader"
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Marley Spoon Task",
			template: "./public/index.html"
		})
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	}
};
