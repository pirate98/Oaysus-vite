import { Provider } from "react-redux";

import { store } from "./data/store";
import Routes from "./Routes";
import { AppBridgeProvider, QueryProvider } from "./services/providers";
import "./assets/css/app.scss";
import Upsells from "./pages/upsells/Upsells";
import Navigation from "./organisms/navigation/Navigation";
import { GoogleFonts } from "./services";

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
        <GoogleFonts />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href={`https://fonts.googleapis.com/css2?${"fonts"}&display=swap`}
            rel="stylesheet"
          /> */}
      </Provider>
    </QueryProvider>
  );
}
