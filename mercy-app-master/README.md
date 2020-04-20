## Maintain original repos update

- for each new file we make that are based on an existing library for reference, we add `-mercy` behind the file name.

## Steps from scratch

### Setup mercy keystone

1. follow get started in keystone to start a keystone project
2. replace `keystone/app-admin-ui` with our own `app-admin-ui`(a copy from keystone/app-admin-ui) folder in the root folder, and move all the package dependencies of our app-admin-ui to the root folders package.json
3. create a copy of `app-admin-ui/server/getWebpackConfig.js` and name it with `-mercy` in the end and add `'@apollo/react-hooks$': require.resolve('@apollo/react-hooks')` to `app-admin-ui/server/getWebpackConfig-mercy.js` in `resolve.alias` to prevent duplicate modules in runtime. In `app-admin-ui/index.js`, change `const getWebpackConfig = require('./server/getWebpackConfig');` to `const getWebpackConfig = require('./server/getWebpackConfig-mercy');`
4. add nextjs typescript app (ex: pickbazar shop) in the root folder and move all the package dependencies of nextjs to the root folders package.json
5. add `modules: [path.resolve(__dirname, '../../shop/'), 'node_modules']` to `resolve` to enable admin-ui to use shops files with absolute path.

### Enable typescript editing.

1. to enable typescript editing in custom admin page, in `app-admin-ui/server/getWebpackConfig-mercy.js` ,replace rules of babel-loader's testing config `test: /\.js$/` to `test: /\.(ts|js)x?$/` to enable the usage of typescript.
2. add `extensions: ['.tsx', '.ts', '.js', '.jsx']` to `resolve` in `app-admin-ui/server/getWebpackConfig-mercy.js`
3. remove `Nav` component from `app-admin-ui/client/index` to remove the sidebars in admin page.
