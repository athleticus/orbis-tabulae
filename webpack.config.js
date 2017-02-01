const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require("glob");
const path = require('path');

// http://stackoverflow.com/a/196991
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

const generateIndex = function(mainScripts, currentName) {
    const links = mainScripts.map(script => {
        const name = path.basename(script, '.js');
        const url = `./${name}.html`;
        const isActive = currentName === name;
        return `<li class="${isActive ? 'active' : ''}"><a href="${url}">${toTitleCase(name)}</a></li>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title>Orbis Tabulae</title>
  </head>
  <body>
  <header>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Orbis Tabulae</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        ${links}
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  </header>
  </body>
</html>`;
}

const mainScripts = ["./src/js/main/index.js"].concat(glob.sync("./src/js/main/*.js").filter(s => path.basename(s) !== 'index.js'));

// make one entry for each file in main dir
const entries = mainScripts.map((filepath) => {
    return [path.basename(filepath, '.js'), filepath]
}).reduce((a, [name, filepath]) => {
    a[name] = filepath;
    return a;
}, {});

const htmlFiles = mainScripts.map(filepath => {
    return path.basename(filepath, '.js');
}).map(name => {
    const filename = `${name}.html`;
    return new HtmlWebpackPlugin({
        filename,
        chunks: [name],
        templateContent: generateIndex(mainScripts, name)
    });
});

module.exports = {
    entry: entries,
    output: {
        path: __dirname + '/build',
        filename: "[name].js"
    },
    module: {
        loaders: [
          { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
          },
          { 
            test: /\.png$/, 
            loader: "url-loader?limit=100000" 
          },
          { 
            test: /\.jpg$/, 
            loader: "file-loader" 
          },
          {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
          },
          {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
          },
          {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file-loader'
          },
          {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
          }
        ]
    },
    plugins: [
        ...htmlFiles,
        new CopyWebpackPlugin([
            { from: './assets' }
        ])
    ]
};