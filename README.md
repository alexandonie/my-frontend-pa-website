# My frontend PA website

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![peerDependencies Status](https://img.shields.io/david/peer/alexandonie/my-frontend-pa-website.svg)](https://david-dm.org/alexandonie/my-frontend-pa-website?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/alexandonie/my-frontend-pa-website.svg)](https://david-dm.org/alexandonie/my-frontend-pa-website?type=dev)

This is the presentation website for [my-frontend-pa](https://github.com/alexandonie/my-frontend-pa), a webpack boilerplate for static websites that can do es6, handlebars and sass between many other things. It has been built using a [different bundler](https://parceljs.org) for learning and researching purposes.

![Website Preview](https://stupefied-euler-a72577.netlify.com/12f31pw21dfs3sd3.jpg "My frontend PA website")


**Note:** This a side project/experiment. The website has been built by myself to practice my design skills and improve my writing. Nothing is serious and everything is released under [MIT](LICENSE) so you can do whatever you want with it.



## Installation

Before anything else, make sure nodejs and npm are installed on your machine. If not, follow [these instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and then proceed with the next steps:

```bash
git clone https://github.com/alexandonie/my-frontend-pa-website
```

```bash
cd my-frontend-pa-website
```

```bash
npm run install
```

## Running

The project is now on your machine and all the dependencies should be installed. All that's left to do is to fire up the project. You can do that my running the command:

```bash
npm run dev
```

This will run the project in development mode. It will start a local dev server, it will generate source maps and everything that's required for a modern front-end development environment.

If you want to get the project production ready, then all you have to do is to run:

```bash
npm run build
```

This will bundle up and optimize all of your code, it will rename all of your assets for cache busting (among other things) and will place everything in a `dist` directory at the root level of the project.

## File structure
```
my-frontend-pa-website
├── dist
├── src
│   ├── images
│   ├── scripts
│   ├── styles
│   ├── favicon.ico
│   ├── index.html
│   └── index.js
├── static // all the assets that should be copied over to dist, should be placed in this directory
├── .browserslistrc
├── .eslintrc.json
├── .gitignore
├── .postcssrc
├── .sassrc
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

## Author

**Alex Andonie**

-   Website: <https://alexandonie.com/>
-   Github: <https://github.com/alexandonie/>

## License

The code is available under the [MIT license](LICENSE).
