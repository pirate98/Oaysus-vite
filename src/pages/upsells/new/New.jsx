import { useNavigate } from "react-router-dom";

import { EditableElement } from "@/atoms";
import classes from "./New.module.scss";
import { EditPen } from "@/assets/svg";
import { UpsellNew } from "@/templates/upsellNew/UpsellNew";
import { TriggerCard } from "./triggerCard/TriggerCard";
import { BuilderCard } from "./builderCard/BuilderCard";
import { EditableTitle } from "@/molecules";

export default function New() {
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
      <EditableTitle
        className={classes.editable}
        type="h1"
        text="New upsell #1"
      />
      <TriggerCard />
      <BuilderCard />
    </UpsellNew>
  );
}
