import { Button } from "@/atoms";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { testTrigger } from "../../../pages/upsells/upsellsSlice";
import { DynamicPartTemplate } from "../dynamicPartTemplate/DynamicPartTemplate";
// import classes from "./Upsells.module.scss";

export function UpsellsNav({}) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let backButtonText = "Back";
  let rightButtonText = "";
  let handleRightButton;

  if (location.pathname.includes("new")) {
    backButtonText = "Upsells";
    rightButtonText = "Publish Upsell";
  }

  if (location.pathname.includes("trigger")) {
    rightButtonText = "Save Trigger";
    handleRightButton = () => {
      dispatch(testTrigger());
      navigate("/upsells/new");
    };
  }

  return (
    <DynamicPartTemplate
      leftSection={<Button.Back>{backButtonText}</Button.Back>}
      buttonSection={
        <Button.Primary size={"sm"} onClick={handleRightButton}>
          {rightButtonText}
        </Button.Primary>
      }
    />
  );
}
