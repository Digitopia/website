## Basic usage

- To install the dependencies (just first time): `npm install`
- To run the project: `npm run dev` (will automatically open browser and with live reload)
- To update the website: `npm run build` and then commit to Github

## Where to edit info

Either in `js/data.js` or directly in the `index.html`

#### Gulp Tasks

- `gulp` the default task that builds everything
- `gulp watch` browserSync opens the project in your default browser and live reloads when changes are made
- `gulp css` compiles SCSS files into CSS and minifies the compiled CSS
- `gulp js` minifies the themes JS file
- `gulp vendor` copies dependencies from node_modules to the vendor directory
