import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App/";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*

1. Register callback with 
store.subscribe(() => console.log('Look ma, Redux!!'))

2. Dispatch action with
store.dispatch( addArticle({ name: 'React Redux Tutorial for Beginners', id: 1 }) )

3. Get state using
store.getState()

*/