import { useRef } from "react";

import Grid from "@mui/material/Grid";

import { EditableElement, Page, Card, Divider, Button } from "@/atoms";
import classes from "./New.module.scss";
import { CategoryTrigger, EditPen } from "@/assets/svg";
import { UpsellNew } from "../../../templates/upsellNew/UpsellNew";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function New() {
  const editableElement = useRef();

  const handleEditPenClick = () => {
    // console.log(editableElement.current);
    const editableEl = editableElement.current;
    editableEl.focus();
  };

  const {
    upsells: { testTrigger },
  } = useSelector((state) => state);

  return (
    <UpsellNew
      backButtonText={"Upsells"}
      bottomButtonText="Create Upsell"
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
      <Card.Settings className={classes.cardFlex}>
        <CategoryTrigger />
        <div className={classes.textContainer}>
          <h2 className={classes.customH2}>Entry trigger</h2>
          <p>Select specific conditions that trigger your upsells</p>
        </div>
        <Link to="/upsells/trigger">
          {testTrigger ? (
            <Button.Primary>Edit Trigger</Button.Primary>
          ) : (
            <Button.Primary>Select Trigger</Button.Primary>
          )}
        </Link>
      </Card.Settings>
    </UpsellNew>
  );
}
