# Interview Scheduler
Interview Scheduler is a user-friendly full-stack single-page application that simplifies the process of scheduling interviews. Users can book, edit, and delete appointments between the hours of 12 PM and 5 PM, Monday to Friday, with one student and a pre-defined interviewer. All appointment data is stored in a PostgreSQL database, and the frontend is built using React components, ensuring a seamless experience.

## Setup

1. Install dependencies with `npm install`.
2. Setup and Run the the Scheduler-API (https://github.com/lighthouse-labs/scheduler-api).
3. Start the API server using the `npm start` command. The app will be served at <http://localhost:8001/>.
4. Switch over to the scheduler directory.
5. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
6. Go to <http://localhost:8080/> in your browser.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Run the Cypress Test Framework

```sh
npm run cypress
```

## GIF

![Scheduler demo](https://github.com/samnarduzzi/scheduler/blob/master/public/docs/scheduler.gif?raw=true)

## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

## Dev Dependencies
- @babel/core
- @storybook/addon-actions
- @storybook/addon-backgrounds
- @storybook/addon-links
- @storybook/addons
- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- babel-loader
- prop-types
- react-test-renderer
- sass