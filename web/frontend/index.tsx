import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";
import App from "./src/App";
import { store } from "./src/data/store";

ReactDOM.render(
  <PolarisProvider>
    <BrowserRouter>
      <Provider store={store}>
        {process.env.VITE_FOR_SHOPIFY ? (
          <AppBridgeProvider>
            <App />
          </AppBridgeProvider>
        ) : (
          <App />
        )}
      </Provider>
    </BrowserRouter>
  </PolarisProvider>,
  document.getElementById("app")
);
