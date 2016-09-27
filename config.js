module.exports =
{
	developmentServerPort: 8080,
	src: './src',
	dest: './dist',
	html: 'index.html',
	styles: 'index.scss',
	javascript:
	{
		entry: { index: 'index.js' },
		outputName: '[name].js',
	},
};