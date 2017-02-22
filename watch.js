const fsbx = require('fuse-box');

const postCssPlugins = [];

const fuseBox = fsbx.FuseBox.init({
  homeDir: ".",
  sourceMap: {
    bundleReference: 'pages.js.map',
    outFile: `dist/pages.js.map`
  },
  cache: false,
  outFile: `dist/pages.js`,
  tsConfig: './tsConfig.json',
  plugins: [
    fsbx.SVGPlugin(),
    [
      fsbx.PostCSS(postCssPlugins, {from: 'styles/main.css'}),
      fsbx.CSSResourcePlugin({inline: true}),
      fsbx.CSSPlugin()
    ],
    fsbx.JSONPlugin()
  ]
});

fuseBox.devServer('>lib/client.ts', {
  port: 4446,
  httpServer: false
});
