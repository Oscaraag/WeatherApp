const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		Home: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		chunkFilename: 'js/[id].[chunkhash].js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		compress: true,
		port: 9000,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'assets/',
					},
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
		}),
	],
}
