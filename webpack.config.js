const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: {
		Home: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
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
					loader: 'url-loader',
					options: {
						limit: 1000,
						name: '[hash].[ext]',
						outputPath: 'assets',
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css',
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './public/index.html'),
			filename: 'public/index.html',
		}),
	],
}
