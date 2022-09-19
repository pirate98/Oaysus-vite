import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";

import {
  ContentComponent,
  IncentiveComponent,
} from "../../molecules/builderComponents";
import dragDrop from "../../data/dragDrop";

export function Page() {
  const {
    builder: { page },
  } = useSelector((state) => state);

  console.log({ page });

  const [{ isOver }, drop] = useDrop({
    accept: dragDrop.types.BUILDER_COMPONENT,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <section
      ref={drop}
      style={{ border: isOver ? "2px solid yellow" : "inherit" }}
    >
      {page &&
        page.length &&
        page.map((element, idx) => {
          if (element.name.includes("incentive")) {
            return <IncentiveComponent key={idx} content={element} />;
          } else if (element.name.includes("content")) {
            return <ContentComponent key={idx} content={element} />;
          }
        })}
    </section>
  );
}
