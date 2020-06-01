# Apollo Server

## Prerequisites

- Change folder path to server directory: `$ cd server`
- Add `nodemon`: `yarn add nodemon --dev`
- Add Babel for Node: 

  ```bash
  $ yarn add @babel/core @babel/node @babel/preset-env --dev
  ```
- Add `.babelrc`

  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

- Add `start` script to package.json

  ```json
  {
    "start": "nodemon --exec babel-node src/index.js"
  }
  ```

## References
- [Apollo Tutorial](https://www.apollographql.com/docs/tutorial/schema/)