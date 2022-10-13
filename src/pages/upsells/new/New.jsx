import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import { EditableElement } from "@/atoms";
import classes from "./New.module.scss";
import { EditPen } from "@/assets/svg";
import { UpsellNew } from "@/templates/upsellNew/UpsellNew";
import { TriggerCard } from "./triggerCard/TriggerCard";
import { BuilderCard } from "./builderCard/BuilderCard";

export default function New() {
  const editableElement = useRef();

  const handleEditPenClick = () => {
    // console.log(editableElement.current);
    const editableEl = editableElement.current;
    editableEl.focus();
  };

  const navigate = useNavigate();

  return (
    <UpsellNew
      backButtonText={"Upsells"}
      bottomButtonText="Create Upsell"
      bottomButtonOnClick={() => {
        navigate("/builder");
      }}
      rightButtonText={"Publish Upsell"}
    >
      <div className={classes.editHeader}>
        <EditableElement
          className={classes.h1}
          type={"h1"}
          ref={editableElement}
        >
          {"New upsell #1"}
        </EditableElement>
        <EditPen className={classes.editPen} onClick={handleEditPenClick} />
      </div>
      <TriggerCard />
      <BuilderCard />
    </UpsellNew>
  );
}
