import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setPageButtons } from "../components/navigation/navigationSlice";

export function usePageButtons({ content }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageButtons(content));

    return () => {
      dispatch(setPageButtons(undefined));
    };
  }, []);

  return "";
}
