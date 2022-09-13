import { Provider } from "react-redux";

import { store } from "./app/store";
import Routes from "./Routes";
import { AppBridgeProvider, QueryProvider } from "./components";
import "./css/app.scss";
import Upsells from "./pages/upsells";
import Navigation from "./pages/navigation/Navigation";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <QueryProvider>
      {/* <NavigationMenu
            navigationLinks={[
              {
                label: "Page name",
                destination: "/pagename",
              },
            ]}
          /> */}
      <Provider store={store}>
        <Navigation />
        <Routes pages={pages} mainPage={"/upsells"}></Routes>
      </Provider>
    </QueryProvider>
  );
}
