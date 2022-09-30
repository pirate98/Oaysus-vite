import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import classes from "./ComponentToolBar.module.scss";
import {
  ToolbarArrowDown,
  ToolbarArrowUp,
  ToolBarCopy,
  ToolbarDelete,
  ToolbarDrag,
} from "../../../assets/svg";
import { HiddenWrapperButton } from "../../../atoms";
import {
  getIndexes,
  numerateTheName,
  removeDigitsAndReturnComponentName,
} from "../../helpers/builder";
import {
  setActiveMenu,
  setPageComponents,
  setSelectedPageComponentName,
} from "../../../pages/builder/builderSlice";

export function ComponentToolBar({ children, onMouseDownCapture }) {
  const [isVisible, setIsVisible] = useState(false);

  const dispatch = useDispatch();

  const {
    builder: { pageComponents, selectedPageComponentName },
  } = useSelector((state) => state);

  const moveDown = () => {
    const { componentIndex } = getIndexes(
      pageComponents,
      selectedPageComponentName
    );

    if (componentIndex === pageComponents.length - 1) return;

    const pageCopy = [...pageComponents];
    const componentsBefore = pageCopy.splice(0, componentIndex);
    const thisComponent = pageCopy.shift();

    componentsBefore.push(pageCopy.shift());

    const newPage = [...componentsBefore, thisComponent, ...pageCopy];

    dispatch(setPageComponents(newPage));
  };

  const moveUp = () => {
    const { componentIndex } = getIndexes(
      pageComponents,
      selectedPageComponentName
    );

    if (componentIndex === 0) return;

    const pageCopy = [...pageComponents];
    const componentsAfter = pageCopy.splice(componentIndex);
    const thisComponent = componentsAfter.shift();

    componentsAfter.unshift(pageCopy.pop());

    const newPage = [...pageCopy, thisComponent, ...componentsAfter];

    dispatch(setPageComponents(newPage));
  };

  const copy = () => {
    const componentNameBase = removeDigitsAndReturnComponentName(
      selectedPageComponentName
    );
    const newNumeratizedName = numerateTheName(
      pageComponents,
      componentNameBase
    );
    // console.log({ newNumeratizedName });

    const { componentIndex } = getIndexes(
      pageComponents,
      selectedPageComponentName
    );

    const newModule = {
      ...pageComponents[componentIndex],
      name: newNumeratizedName,
    };

    const newPage = [...pageComponents];

    newPage.splice(componentIndex, 0, newModule);

    dispatch(setPageComponents(newPage));
  };

  const deleteComponent = () => {
    const { componentIndex } = getIndexes(
      pageComponents,
      selectedPageComponentName
    );

    const newPage = [...pageComponents];
    newPage.splice(componentIndex, 1);

    dispatch(setSelectedPageComponentName(undefined));
    dispatch(setPageComponents(newPage));
  };

  const clickHandle = ({ target }) => {
    const editableSpan = target;
    const contentIsEditable = editableSpan?.parentElement?.isContentEditable;
    // console.log({ contentIsEditable });
    if (contentIsEditable) {
      setIsVisible(false);
      return;
    }

    if (!isVisible) setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  return (
    <ClickAwayListener onClickAway={handleBlur}>
      <section
        onClick={clickHandle}
        className={classes.toolBarWrapper}
        onMouseDownCapture={onMouseDownCapture}
      >
        {children}
        {isVisible && (
          <section className={classes.toolBar}>
            <HiddenWrapperButton>
              <ToolbarArrowDown onClick={moveDown} />
            </HiddenWrapperButton>
            <HiddenWrapperButton>
              <ToolbarArrowUp onClick={moveUp} />
            </HiddenWrapperButton>
            <HiddenWrapperButton>
              <ToolbarDrag />
            </HiddenWrapperButton>
            <HiddenWrapperButton>
              <ToolBarCopy onClick={copy} />
            </HiddenWrapperButton>
            <HiddenWrapperButton>
              <ToolbarDelete onClick={deleteComponent} />
            </HiddenWrapperButton>
          </section>
        )}
      </section>
    </ClickAwayListener>
  );
}
