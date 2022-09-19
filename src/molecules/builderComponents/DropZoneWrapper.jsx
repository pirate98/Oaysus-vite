import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { setPage } from "../../pages/builder/builderSlice";
import dragDrop from "../../data/dragDrop";
import * as builderComponents from "../../molecules/builderComponents";

export function DropZoneWrapper({ content }) {
  const dispatch = useDispatch();

  const {
    builder: { page },
  } = useSelector((state) => state);

  // console.log({ content });

  const getIndexes = (content) => {
    const { name } = content;

    let hoveredElementIndex = 0;
    let blankComponentIndex = undefined;

    page.forEach((content, idx) => {
      if (content.name === "blank") {
        blankComponentIndex = idx;
      }

      if (content.name === name) {
        hoveredElementIndex = idx;
      }
    });

    return { hoveredElementIndex, blankComponentIndex };
  };

  // const addComponentToPage=(page, component)=>{

  // }

  const [{ isOver }, drop] = useDrop({
    accept: dragDrop.types.BUILDER_COMPONENT,
    hover: (item, monitor) => {
      console.log({ item, monitor });

      const { hoveredElementIndex, blankComponentIndex } = getIndexes(content);

      console.log({ blankComponentIndex, hoveredElementIndex });
      if (blankComponentIndex === hoveredElementIndex + 1) return;

      let newPage = [...page];

      if (blankComponentIndex !== undefined) {
        newPage.splice(blankComponentIndex, 1);
      }

      newPage.splice(hoveredElementIndex, 0, {
        name: "blank",
      });
      console.log({ newPage });
      dispatch(setPage(newPage));
    },
    drop: (item, monitor) => {
      console.log({ item, monitor });
      console.log(content.name);
      const componentName = item.name.toLowerCase();

      const { hoveredElementIndex, blankComponentIndex } = getIndexes(content);

      let newPage = [...page];

      // if (blankComponentIndex !== undefined) {
      //   newPage.splice(blankComponentIndex, 1);
      // }

      newPage.splice(blankComponentIndex, 1, {
        name: componentName,
      });
      console.log({ newPage });
      dispatch(setPage(newPage));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const getComponentName = (name) => {
    let digitIndex = name.length;

    if (name.match(/[0-9]/i)) {
      digitIndex = name.match(/[0-9]/i).index;
    }

    const nameWithoutDigits = name.substring(0, digitIndex);

    const nameUpperCased =
      nameWithoutDigits[0].toUpperCase() +
      nameWithoutDigits.substring(1, nameWithoutDigits.length);

    return nameUpperCased + "Component";
  };

  const DynamicComponentName =
    builderComponents[getComponentName(content.name)];

  return <DynamicComponentName content={content} ref={drop} />;
}
