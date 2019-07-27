# Notes

A simple boilerplate/starter for getting React with an Express backend up and going. Comes complete with component and test examples, ES-lint w/ React-lint, Prettier, React Router v5, Enzyme, recommended VS Code extensions and settings, and a few other nice treats.

## The Stack

- Express server, React client
- Jest w/ Enzyme for client-side testing
- Sass
- Webpack and other configurations by way of Create React App
- Linted using `react-app` with Prettier for formatting

## Install

- Create local directory of your preference
- Init git and pull repo
  - `git init` in desired directory
  - `git remote add origin https://github.com/wesdollar/notes.git`
  - `git pull origin master`
- Run `npm i` in both root directory and `./client`
- Fire up Express by running `npm start` in root directory
  - Terminal will need to remain open during session
- In a second terminal, fire up client by running `npm start` in `./client`
  - This command should open your default browser. If not, navigate to `localhost:3000` once compiled.
  - Terminal will need to remain open during session

## Housekeeping

- Some workspace settings and recommended VS Code extensions have been included in the repo
- **DO NOT** commit `db.json`, which should be captured in the `.gitignore`
