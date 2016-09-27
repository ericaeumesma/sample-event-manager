var _ = require('underscore');
var async = require('async');
var path = require('path');
var del = require('del');
var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var sourcemaps = require('gulp-sourcemaps');
var argv = require('minimist')(process.argv.slice(2));
var spawn = require('child_process').spawn;
var config = require('./config');
var createServer = require('http-server').createServer;

var SOCKET_IO_PORT = 8081;
var PRODUCTION = !!(argv.production || argv.p);
var SERVER = !!(argv.server || argv.s);
var WATCH = false;
var SRC = config.src;
var DEST = config.dest;

var paths = 
{
	src:
	{
		assets:	path.join(SRC, 'assets/**/*'),
		styles:	path.join(SRC, 'sass/**/*'),
		html:	_.flatten([config.html]).map(function(file)
		{
			return path.join(SRC, file);
		})
	},
	dest:
	{
		assets:	path.join(DEST, 'assets'),
		styles:	path.join(DEST),
		html:	path.join(DEST)
	}
};

if(PRODUCTION)
{
	console.log('╔═════════════════════════════╗');
	console.log('║ Running in production mode. ║');
	console.log('╚═════════════════════════════╝');
}

if(SERVER)
{
	var server = createServer({ root: DEST });
	server.listen(config.developmentServerPort, function()
	{
		console.log('╔═════════════════════════════╗');
		console.log('║ Development Server running. ║');
		console.log('╚═════════════════════════════╝');
	});
}

gulp.task('clear', function()
{
	return del(path.join(DEST, '**/*'));
});

gulp.task('assets', function()
{
	return gulp.src(paths.src.assets)
			.pipe(changed(paths.dest.assets))
			.pipe(gulp.dest(paths.dest.assets));
});

gulp.task('html', function()
{
	return gulp.src(paths.src.html)
			.pipe(changed(paths.dest.html))
			.pipe(gulp.dest(paths.dest.html));
});

gulp.task('styles', function ()
{
	var processors =
	[
		autoprefixer({browsers: ['last 2 version']})
    ];

	var mainSassFiles = _.flatten([config.styles]).map(function(file)
	{
		return path.join(SRC, '/sass/', file);
	});

	var stream = gulp.src(mainSassFiles);

	if(PRODUCTION)
	{
		processors.push(cssnano());
		stream = stream.pipe(sass().on('error', sass.logError))
					.pipe(postcss(processors));
	}
	else
	{
		stream = stream.pipe(sourcemaps.init())
					.pipe(sass().on('error', sass.logError))
					.pipe(postcss(processors))
					.pipe(sourcemaps.write('./'));
	}

	return stream.pipe(gulp.dest(paths.dest.styles));			
});

gulp.task('javascript', function(callback)
{
	var cmd = 'webpack';
	var args = [];
	var childProcess;

	if(WATCH)
	{
		setTimeout(callback, 2);
	}

	if(!WATCH && !SERVER && PRODUCTION)
	{
		args.push('-p');
	}
	else
	{
		if(WATCH) args.push('--watch');
		args.push('-d');
	}

	childProcess = spawn(cmd, args, { stdio: 'inherit', cwd: __dirname });
	if(!WATCH) childProcess.on('close', callback);
});

gulp.task('watch', function(callback)
{
	WATCH = true;

	var io = require('socket.io')(SOCKET_IO_PORT);

	io.on('connection', function(socket)
	{
		socket.emit('connected');
	});

	gulp.on('task_stop', function(event)
	{
		io.emit('task-complete', event.task);
	});

	runSequence('build', function()
	{
		// JS files are already being watched by webpack

		gulp.watch(paths.src.assets, ['assets']);
		gulp.watch(paths.src.styles, ['styles']);
		gulp.watch(paths.src.html, ['html']);

		callback();
	});
});

gulp.task('build', ['clear'], function(callback)
{
	runSequence(['assets', 'html', 'styles', 'javascript'], callback);
});
