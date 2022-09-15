import { Provider } from "react-redux";

import { store } from "./data/store";
import Routes from "./Routes";
import { AppBridgeProvider, QueryProvider } from "./services/providers";
import "./assets/css/app.scss";
import Upsells from "./pages/upsells/Upsells";
import Navigation from "./pages/organisms/navigation/Navigation";

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
