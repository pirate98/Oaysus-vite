import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./src/services/providers";
import App from "./src/App";
import { store } from "./src/data/store";
import { ShopifyInit } from "./src/organisms/wrappers/shopifyInit/ShopifyInit";

ReactDOM.render(
  <PolarisProvider>
    <BrowserRouter>
      <Provider store={store}>
        {process.env.VITE_FOR_SHOPIFY ? (
          <AppBridgeProvider>
            <ShopifyInit>
              <App />
            </ShopifyInit>
          </AppBridgeProvider>
        ) : (
          <App />
        )}
      </Provider>
    </BrowserRouter>
  </PolarisProvider>,
  document.getElementById("app")
);
