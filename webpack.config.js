const path = require('path');

module.exports = env => {
  if(env) {
    console.log('NODE_ENV: ', env.NODE_ENV);
    console.log('Production: ', env.production);
  }

  return {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'public'),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  }; 
};