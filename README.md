<h1 align="center">
gisellen.portfolio
</h1>

<p align="center">
  the current iteration of my <a href="https://gisellen.github.io/portfolio/">personal porfolio</a>
</p>

<h2>setup</h2>
1. Install dependencies


```
npm install
```

2. Start Development Server
```
npm start
```

<h2>build</h2>
This assumes the repository is completely set up.

This website is built with [react-gh-pages](https://github.com/gitname/react-gh-pages), refer to docs for any help.
1. Add deployment scripts to `package.js`
```diff
"scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
2. Deploy application to github pages

```
npm run deploy
```

<h2>packages</h2>

[react scroll](https://github.com/fisshy/react-scroll)

[react-anime](https://github.com/plus1tv/react-anime)
