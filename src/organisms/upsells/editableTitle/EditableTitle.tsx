import { useRef } from "react";

import { Button, EditableElement } from "@/atoms";
import classes from "./.module.scss";
import { EditPen } from "@/assets/svg";

interface Props {
  className?: string;
  type: string;
  text?: string;
}

export const EditableTitle = ({ className, type, text }: Props) => {
  const editableElement = useRef<HTMLDivElement>();

  const handleEditPenClick = () => {
    const editableEl = editableElement.current;
    editableEl?.focus();
  };

  return (
    <div className={className}>
      <EditableElement type={type} ref={editableElement}>
        {text}
      </EditableElement>
      <Button.HiddenWrapper>
        <EditPen className={classes.editPen} onClick={handleEditPenClick} />
      </Button.HiddenWrapper>
    </div>
  );
};
