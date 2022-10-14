import {
  cloneElement,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import classes from "./ComponentToolBar.module.scss";
import {
  ToolbarArrowDown,
  ToolbarArrowUp,
  ToolBarCopy,
  ToolbarDelete,
  ToolbarDrag,
} from "@/assets/svg";
import { HiddenWrapper } from "@/atoms";
import {
  getIndexes,
  numerateTheName,
  removeDigitsAndReturnComponentName,
} from "@/helpers/builder";
import {
  setPageComponents,
  setSelectedPageComponentName,
} from "@/pages/builder/builderSlice";
import componentsData from "@/data/componentsData";
import { DeleteModal } from "./DeleteModal";
import { DragWrapper } from "../builderDragWrapper/DragWrapper";
import { RefWrapper } from "../refWrapper/RefWrapper";
import { useRef } from "react";

export function ComponentToolBar({ children, onMouseDownCapture }) {
  const componentRef = useRef();

  const [isFocused, setIsFocused] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const {
    builder: { pageComponents, selectedPageComponentName },
  } = useSelector((state) => state);

  const componentIsOnTop = pageComponents[0].name === selectedPageComponentName;

  const memoPageComponents = useMemo(() => pageComponents, [pageComponents]);

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

  const copy = ({ target }) => {
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

    // console.log(target);
    // target.blur();
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
      setIsFocused(false);
      return;
    }

    if (!isFocused) setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const modalOnClose = useCallback(
    () => setIsModalOpen(false),
    [setIsModalOpen]
  );

  const modalOnApprove = useCallback(() => {
    const { componentIndex } = getIndexes(
      memoPageComponents,
      selectedPageComponentName
    );

    const newPage = [...memoPageComponents];
    newPage.splice(componentIndex, 1);

    dispatch(setSelectedPageComponentName(undefined));
    dispatch(setPageComponents(newPage));
    setIsModalOpen(false);
  }, [selectedPageComponentName, memoPageComponents]);

  const onDrag = useCallback(() => setIsComponentVisible(false));
  const onDragEnd = useCallback(() => setIsComponentVisible(true));

  return (
    <>
      <ClickAwayListener onClickAway={handleBlur}>
        <section
          onClick={clickHandle}
          className={classes.toolBarWrapper}
          onMouseDownCapture={onMouseDownCapture}
        >
          {isComponentVisible && (
            <div
              ref={componentRef}
              className={
                isFocused ? classes.borderFocused : classes.focusContainer
              }
            >
              {cloneElement(children, {
                // className: isFocused && classes.borderFocused,
              })}
            </div>
          )}
          {isFocused && (
            <section
              className={
                classes.toolBar +
                " " +
                (componentIsOnTop ? classes.zIndex1200 : classes.zIndex2)
              }
            >
              <HiddenWrapper>
                <ToolbarArrowUp onClick={moveUp} />
              </HiddenWrapper>
              <HiddenWrapper>
                <ToolbarArrowDown onClick={moveDown} />
              </HiddenWrapper>
              <HiddenWrapper>
                <DragWrapper
                  componentRef={componentRef}
                  onDrag={onDrag}
                  onDragEnd={onDragEnd}
                >
                  <RefWrapper>
                    <ToolbarDrag />
                  </RefWrapper>
                </DragWrapper>
              </HiddenWrapper>
              <HiddenWrapper>
                <ToolBarCopy onClick={copy} />
              </HiddenWrapper>
              <HiddenWrapper>
                <ToolbarDelete onClick={deleteComponent} />
              </HiddenWrapper>
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
