import { NavLink, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

import { Button } from "@/atoms/button";
import classes from "./.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addUpsell } from "../../pages/upsells/upsellsSlice";

export function BuilderLinks() {
  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSave = () => {
    dispatch(addUpsell(pageComponents));
    navigate("/upsells/new");
  };

  return (
    <>
      <section className={classes.leftSection}>
        <Button.Back>Exit Builder</Button.Back>
      </section>
      <section className={classes.buttonGroup}>
        <Button.Secondary size={"sm"}>Preview on Store</Button.Secondary>
        <Button.Primary onClick={handleSave} size={"sm"}>
          Save Offer
        </Button.Primary>
      </section>
    </>
  );
}
