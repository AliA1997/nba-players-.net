//import your webpack plugin for using your index.html as a template for your index.html file in your public folder.
const htmlPlugin = require('html-webpack-plugin');
//import the path module for joining paths.
const path = require('path');


//Export a object for defining your bundler.
module.exports = {
    //Entry file for your react application
    entry: path.join(__dirname, '/index.js'),
    //OUtput for your bundled file.
    output: {
        //Name of bundled file.
        filename: 'bundle.js',
        //Path of your bundled file.
        path: path.join(__dirname, '/dist')
    },
    //When using webpack dev server define a devServer attribute.
    devServer: {
        //Public server path
        publicPath: '/',
        //Set the history api fallback url boolean value set to true.
        historyApiFallback: true,
        //Base folder for production
        contentBase: '/dist'
    },
    //Define the loaders used for specific files via the module property.
    module: {
        //Rules are the rules for what files would be bundled corresponding to the loader for that file.
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            //Set the cacheDirectory to true to reuse compiled files.
                            cacheDirectory: true
                        }
                    }
                ],
                //Exclude node_modules from being bundled.
                exclude: /node_modules/
            },
            {   
                //Use url-loader for loading images, and icons.
                test: /\.(png|svg|jpg|gif|ico|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            //Use file-loader, and url-loader for loading fonts from semantic-ui
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.otf(\?.*)?$/,
                use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf'
            },
            {
                //Test proeprty would be a regex pattern for the file 
                test: /\.(le|sc|c)ss$/,
                //THen the use property will be used to specify what loader to use for the corresponding regular expression.
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            includePaths: [ path.resolve( '../node_modules' ) ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx', '.scss', '.css', '.less' ]
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, 'index.html')
        })
    ]
}