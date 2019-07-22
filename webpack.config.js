const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: ["@babel/polyfill", "./src/index.js"],
	devServer: {
		contentBase: "./dist",
		historyApiFallback: true
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
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							{
								plugins: ["@babel/plugin-proposal-class-properties"]
							}
						]
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
	resolve: {
		alias: {
			Components: path.resolve(__dirname, "src/components/"),
			Containers: path.resolve(__dirname, "src/containers/"),
			Routes: path.resolve(__dirname, "src/routes/"),
			Actions: path.resolve(__dirname, "src/store/actions/")
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Marley Spoon Task",
			template: "./public/index.html"
		}),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
			"process.env.DEBUG": JSON.stringify(process.env.DEBUG)
		}),
		new Dotenv()
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	node: {
		fs: "empty"
	}
};
