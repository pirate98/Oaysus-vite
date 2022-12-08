import { Route } from "react-router-dom";

import Routes from "./Routes";
// import { AppBridgeProvider, QueryProvider } from "./services/providers";
import "./assets/css/app.scss";
import Navigation from "./organisms/navigation/Navigation";
import { GoogleFonts } from "./services";
import Settings from "./pages/settings/Settings";
import New from "./pages/upsells/new/New";
import Trigger from "./pages/upsells/trigger/Trigger";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <>
      <Navigation />
      <Routes pages={pages} mainPage={"/upsells"}>
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/upsells/new" element={<New />} />
        <Route path="/upsells/trigger" element={<Trigger />} />
      </Routes>
      <GoogleFonts />
    </>
  );
}
