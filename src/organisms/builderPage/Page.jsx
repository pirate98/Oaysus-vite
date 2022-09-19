import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";

import {
  ContentComponent,
  IncentiveComponent,
} from "../../molecules/builderComponents";
import dragDrop from "../../data/dragDrop";

import * as builderComponents from "../../molecules/builderComponents";
import { setPage } from "../../pages/builder/builderSlice";

export function Page() {
  const dispatch = useDispatch();

  const {
    builder: { page },
  } = useSelector((state) => state);

  console.log({ page });

  const [{ isOver }, drop] = useDrop({
    accept: dragDrop.types.BUILDER_COMPONENT,
    drop: (item, monitor) => {
      console.log({ item, monitor });
      const componentName = item.name.toLowerCase();

      dispatch(setPage([...page, { name: componentName }]));
    },
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
