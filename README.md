
Install dependencies.

    > npm install

Build webpack bundle(s).

    > npm run build

Open `dist/index.html`.

#### Issue with __webpack_require__.e undefined

You have to either get the node target to pass node's compilation step
(may be getting a window undefined error), which will not use a require.context
call, or, you have to use the require.context call and somehow communicate
to the server_rendering entry point processing that you don't want any chunks
to be used.


