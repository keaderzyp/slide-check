const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var config={
	entry:{
		index:'./src/datetime-format.js'
	},
	mode:'production',
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[
					{loader:'babel-loader'}
				]
			},
		]
	},
	plugins:[
		new UglifyJsPlugin({
			exclude: /\/node_modules/,
			uglifyOptions: {
			  compress: {drop_console:true},
			}
		})
	],
	output:{
		filename:'slide-check.js',
		path:path.join(__dirname,'lib'),
	},
}
module.exports = config;
