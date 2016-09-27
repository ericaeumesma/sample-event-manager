var _ = require('underscore');
var webpack = require('webpack');
var path = require('path');
var config = require('./config');
var SRC = config.src;
var DEST = config.dest;
var argv = require('minimist')(process.argv.slice(2));

var PRODUCTION = !!(argv.production || argv.p);

var configEntry = config.javascript.entry;
var entry = {};

if(_.isString(configEntry))
{
	configEntry = { bundle: configEntry };
}

_.each(configEntry, function(file, name)
{
	entry[name] = path.join(__dirname, SRC, '/js/', file);
});

_.flatten([config.html]).map(function(file)
{
	return path.join(SRC, file);
})

var webpackConfig = 
{
	entry: entry,
	output:
	{
		path: path.resolve(__dirname, DEST),
		filename: config.javascript.outputName
	},
	module:
	{
		loaders:
		[
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: { presets: ['es2015', 'react', 'stage-0' ] }
			}
		]
	},
	plugins: []
};

if(PRODUCTION) webpackConfig.plugins.push(new webpack.DefinePlugin(
{
	'process.env':
	{
		'NODE_ENV': '"production"'
	}
}));

module.exports = webpackConfig;
