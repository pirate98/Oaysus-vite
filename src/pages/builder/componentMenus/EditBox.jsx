import { useSelector } from "react-redux";

import classes from "./EditBox.module.scss";
import { ReactComponent as EditIcon } from "../../../assets/svg/edit-icon.svg";
import { Grid } from "@mui/material";

export function EditBox({ title, subTitle = "Editing" }) {
  const {
    builder: { activeMenu },
  } = useSelector((state) => state);

  return (
    <div className={classes.editBox}>
      <Grid container direction={"column"}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subTitle}>{subTitle}</p>
      </Grid>
      <EditIcon />
    </div>
  );
}
