import {
  ContentComponent,
  IncentiveComponent,
} from "../../molecules/builderComponents";

export function Page({ pageContent }) {
  console.log({ pageContent });

  return (
    <>
      {pageContent &&
        pageContent.length &&
        pageContent.map((element, idx) => {
          if (element.name.includes("incentive")) {
            return <IncentiveComponent key={idx} content={element} />;
          } else if (element.name.includes("content")) {
            return <ContentComponent key={idx} content={element} />;
          }
        })}
    </>
  );
}
