import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import classes from "./EditBox.module.scss";
import { ReactComponent as EditIcon } from "@/assets/svg/editIcon.svg";
import { setSelectedPageComponentName } from "@/pages/builder/builderSlice";
import { HiddenWrapper } from "@/atoms";

export function EditBox({ title, subTitle = "Editing" }) {
  const dispatch = useDispatch();

  const {
    builder: { activeMenu },
  } = useSelector((state) => state);

  return (
    <div className={classes.editBox}>
      <Grid container direction={"column"}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subTitle}>{subTitle}</p>
      </Grid>
      <HiddenWrapper
        className={classes.iconWrapper}
        onClick={() => dispatch(setSelectedPageComponentName(0))}
      >
        <EditIcon />
      </HiddenWrapper>
    </div>
  );
}
