import { cloneElement, forwardRef, useCallback, useState } from "react";

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
  setPageComponents,
  setSelectedPageComponentName,
} from "../../../pages/builder/builderSlice";
import componentsData from "../../../data/componentsData";
import { DeleteModal } from "./DeleteModal";
import { DragWrapper } from "../builderDragWrapper/DragWrapper";
import { RefWrapper } from "../refWrapper/RefWrapper";

export function ComponentToolBar({ children, onMouseDownCapture }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const {
    builder: { pageComponents, selectedPageComponentName },
  } = useSelector((state) => state);

  const componentIsOnTop = pageComponents[0].name === selectedPageComponentName;

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
    setIsModalOpen(true);
  };

  const clickHandle = ({ target }) => {
    // console.log(target);
    const contentIsEditable = target.closest(
      `.${componentsData.EDITABLE_CLASS}`
    );
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

  const modalOnClose = useCallback(
    () => setIsModalOpen(false),
    [setIsModalOpen]
  );

  const modalOnApprove = useCallback(() => {
    const { componentIndex } = getIndexes(
      pageComponents,
      selectedPageComponentName
    );

    const newPage = [...pageComponents];
    newPage.splice(componentIndex, 1);

    dispatch(setSelectedPageComponentName(undefined));
    dispatch(setPageComponents(newPage));
    setIsModalOpen(false);
  }, [selectedPageComponentName]);

  return (
    <>
      <ClickAwayListener onClickAway={handleBlur}>
        <section
          onClick={clickHandle}
          className={classes.toolBarWrapper}
          onMouseDownCapture={onMouseDownCapture}
        >
          {cloneElement(children, {
            className: isVisible && classes.borderFocused,
          })}
          {isVisible && (
            <section
              className={
                classes.toolBar + " " + (componentIsOnTop && classes.zIndex3000)
              }
            >
              <HiddenWrapperButton>
                <ToolbarArrowDown onClick={moveDown} />
              </HiddenWrapperButton>
              <HiddenWrapperButton>
                <ToolbarArrowUp onClick={moveUp} />
              </HiddenWrapperButton>
              <HiddenWrapperButton>
                <DragWrapper>
                  <RefWrapper>
                    <ToolbarDrag />
                  </RefWrapper>
                </DragWrapper>
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
      <DeleteModal
        open={isModalOpen}
        onClose={modalOnClose}
        onApprove={modalOnApprove}
      />
    </>
  );
}
