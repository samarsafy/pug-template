module.exports = {
	entry: './src/index.js',
	output: {
		filename: './dist/bundle.js'
	
	}
	
};

plugins: [
new HtmlWebpackPlugin({
  template: '!!pug-loader!src/index.pug',
}),
]