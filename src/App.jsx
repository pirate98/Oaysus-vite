import Routes from "./Routes";
import { AppBridgeProvider, QueryProvider } from "./components";
import "./css/app.scss";
import Upsell from "./pages/Upsell";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  console.log({ pages });
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
      <Routes pages={pages} mainPage={"/upsell"}></Routes>
    </QueryProvider>
  );
}
