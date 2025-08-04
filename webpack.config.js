const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            {
  		test: /\.(woff2?|ttf|eot|otf)$/,
  		type: 'asset/resource',
  		generator: {
    		  filename: 'fonts/[name][ext]',
  		},
	    },
        ],
    },
};
