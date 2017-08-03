var webpack = require('webpack');
module.exports = {
	devtool:'cheap-module-eval-source-map',
	entry :['./src/index.js'],
	output :{
		path:__dirname,
		filename:'bundle.js'
	},
	module :{
		loaders :[{
				exclude: /node_modules/,
				test:/\.js$/,
				loader:'babel-loader'
			},
			{
				test: /\.css$/, 
				loader: 'style-loader!css-loader'
			}
		]
	},
	plugins :[
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer:{
        colors:true,
        historyApiFallback:true,
        inline:true,
        hot:true
    }
}