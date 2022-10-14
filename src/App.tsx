import Routes from "./Routes";
import { AppBridgeProvider, QueryProvider } from "./services/providers";
import "./assets/css/app.scss";
import Upsells from "./pages/upsells/Upsells";
import Navigation from "./organisms/navigation/Navigation";
import { GoogleFonts } from "./services";
import Settings from "./pages/settings/Settings";
import { Route } from "react-router-dom";
import New from "./pages/upsells/new/New.tsx";
import Trigger from "./pages/upsells/trigger/Trigger";

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
      <Navigation />
      <Routes pages={pages} mainPage={"/upsells"}>
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/upsells/new" element={<New />} />
        <Route path="/upsells/trigger" element={<Trigger />} />
      </Routes>
      <GoogleFonts />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href={`https://fonts.googleapis.com/css2?${"fonts"}&display=swap`}
            rel="stylesheet"
          /> */}
    </QueryProvider>
  );
}
