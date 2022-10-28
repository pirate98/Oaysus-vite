import { useEffect } from "react";

import { useAuthenticatedFetch, useGetSessionToken } from "@/hooks";
import { useDispatch } from "react-redux";
import { setShopifyAppName } from "../../../data/appSlice";

export function ShopifyInit({ children }) {
  const { sessionTokenFunc } = useGetSessionToken();
  const fetchFunc = useAuthenticatedFetch();

  const dispatch = useDispatch();

  useEffect(() => {
    sessionTokenFunc().then((token) => {
      console.log({ token });
      return fetchFunc("/api/decode-token", {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const response = JSON.parse(res);
          console.log({ response });

          dispatch(setShopifyAppName(response.dest.replace("https://", "")));
        });
    });
  }, []);
  return children;
}
