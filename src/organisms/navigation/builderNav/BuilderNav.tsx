import { useNavigate } from "react-router-dom";

import { Button } from "@/atoms/button";
import classes from "./BuilderNav.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addUpsell } from "@/pages/upsells/upsellsSlice";
import {
  ScreenDesktopSvg,
  ScreenMobileSvg,
  ScreenTabletSvg,
} from "@/assets/svg";
import { RootState } from "../../../data/store";
import { DynamicPartTemplate } from "../dynamicPartTemplate/DynamicPartTemplate";

export function BuilderNav() {
  const {
    builder: { pageComponents },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSave = () => {
    dispatch(addUpsell(pageComponents));
    navigate("/upsells/new");
  };

  return (
    <DynamicPartTemplate
      leftSection={<Button.Back>Exit Builder</Button.Back>}
      middleSection={
        <>
          <Button.HiddenWrapper>
            <ScreenDesktopSvg />
          </Button.HiddenWrapper>
          <Button.HiddenWrapper>
            <ScreenTabletSvg />
          </Button.HiddenWrapper>
          <Button.HiddenWrapper>
            <ScreenMobileSvg />
          </Button.HiddenWrapper>
        </>
      }
      buttonSection={
        <>
          <Button.Secondary size={"sm"}>Preview on Store</Button.Secondary>
          <Button.Primary onClick={handleSave} size={"sm"}>
            Save Offer
          </Button.Primary>
        </>
      }
    />
  );
}
