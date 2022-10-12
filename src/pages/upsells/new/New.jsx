import { useRef } from "react";

import Grid from "@mui/material/Grid";

import { EditableElement, Page, Card, Divider, Button } from "@/atoms";
import classes from "./New.module.scss";
import { CategoryTrigger, EditPen } from "@/assets/svg";

export default function New() {
  const editableElement = useRef();

  const handleEditPenClick = () => {
    // console.log(editableElement.current);
    const editableEl = editableElement.current;
    editableEl.focus();
  };

  return (
    <Page>
      <Grid container wrap="nowrap">
        <section className={classes.left}>
          <Button.Back>Upsells</Button.Back>
        </section>
        <section className={classes.middle}>
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
            <Button.Primary>Select Trigger</Button.Primary>
          </Card.Settings>
          <Divider.Vertical />
          <Button.Upsell>Create Upsell</Button.Upsell>
        </section>
        <Button.Primary>Publish Upsell</Button.Primary>
      </Grid>
    </Page>
  );
}
