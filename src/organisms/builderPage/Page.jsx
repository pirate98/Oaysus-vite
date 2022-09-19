import { useSelector } from "react-redux";
import {
  ContentComponent,
  IncentiveComponent,
} from "../../molecules/builderComponents";

export function Page() {
  const {
    builder: { page },
  } = useSelector((state) => state);

  console.log({ page });

  return (
    <>
      {page &&
        page.length &&
        page.map((element, idx) => {
          if (element.name.includes("incentive")) {
            return <IncentiveComponent key={idx} content={element} />;
          } else if (element.name.includes("content")) {
            return <ContentComponent key={idx} content={element} />;
          }
        })}
    </>
  );
}
