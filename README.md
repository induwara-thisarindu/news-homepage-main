# News Homepage (Frontend Mentor)

This repository contains a responsive news homepage built as a Frontend Mentor challenge. It uses plain HTML, CSS and a small amount of JavaScript for the mobile navigation.

## Demo

- Open `index.html` in a browser (or use a Live Server extension) to preview the site.

## Features

- Responsive layout using rem-based sizing and media queries
- Mobile navigation overlay with smooth open/close animation
- Accessible, semantic HTML structure

## Files

- `index.html` — main markup
- `Styles/style.css` — stylesheet (responsive rules, variables, nav overlay)
- `index.js` — small script to toggle the mobile navigation
- `assets/` — fonts and images used by the layout

## How to run

1. Clone this repository:

	git clone <repo-url>

2. Open the project folder in your code editor.

3. Launch `index.html` in your browser. For a live-reload development experience use the VS Code Live Server extension or any static server:

## Notes for maintainers

- The CSS was converted to use rem units for better scalability. If you want to change base sizing, adjust the root font-size on the `html` element.
- The mobile nav uses `.nav_links__appear` and `.nav_links__disappear` classes; `index.js` toggles these and also adds `body.no-scroll` while the overlay is open.

## Contributing

Contributions are welcome — open an issue or send a PR with suggested improvements.

## License

This project is provided for learning and demonstration purposes. Feel free to reuse the code in your projects.

