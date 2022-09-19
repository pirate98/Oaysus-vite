import {
  ContentComponent,
  IncentiveComponent,
} from "../../molecules/builderComponents/ContentComponent";

export function Page({ pageContent }) {
  console.log({ pageContent });

  return (
    <>
      {pageContent &&
        pageContent.length &&
        pageContent.map((element) => {
          if (element.name.includes("incentive")) {
            return <IncentiveComponent content={element.content} />;
          } else if (element.name.includes("content")) {
            return <ContentComponent content={element.content} />;
          }
        })}
    </>
  );
}
