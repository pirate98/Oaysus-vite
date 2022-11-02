import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken } from "@shopify/app-bridge-utils";

export function useGetSessionToken() {
  const app = useAppBridge();
  // console.log({ app });
  const sessionTokenFunc = async () => await getSessionToken(app);
  return { sessionTokenFunc };
}
