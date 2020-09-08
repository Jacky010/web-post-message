const path = require('path');

module.exports = {
	mode: "production",
	entry: './src/index.ts',
	output: {
		path: path.resolve(__dirname, 'lib'),
		filename: 'index.js',
		libraryTarget: "umd",
	},
	resolve: {
		extensions: ["*", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.(js|mjs|jsx|ts|tsx)$/,
				use: [
					{
						loader: require.resolve('babel-loader'),
						options: {
							presets: ["@babel/preset-env"]
						}
					},
					{
						loader: "ts-loader",
					}
				],
				exclude: /node_modules/
			}
		]
	}
};
