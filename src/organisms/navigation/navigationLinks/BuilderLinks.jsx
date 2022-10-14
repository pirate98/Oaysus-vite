import { useNavigate } from "react-router-dom";

import { Button } from "@/atoms/button";
import classes from "./.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addUpsell } from "@/pages/upsells/upsellsSlice";
import {
  ScreenDesktopSvg,
  ScreenMobileSvg,
  ScreenTabletSvg,
} from "@/assets/svg";

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
      <section className={classes.screenButtons}>
        <Button.HiddenWrapper>
          <ScreenDesktopSvg />
        </Button.HiddenWrapper>
        <Button.HiddenWrapper>
          <ScreenTabletSvg />
        </Button.HiddenWrapper>
        <Button.HiddenWrapper>
          <ScreenMobileSvg />
        </Button.HiddenWrapper>
      </section>
      <section className={classes.buttonGroup}>
        <Button.Secondary size={"sm"}>Preview on Store</Button.Secondary>
        <Button.Primary onClick={handleSave} size={"sm"}>
          Save Template
        </Button.Primary>
      </section>
    </>
  );
}
