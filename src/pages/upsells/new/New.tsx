import { useNavigate } from "react-router-dom";

import classes from "./New.module.scss";
import { UpsellsNewTemplate } from "@/templates";
import { TriggerCard } from "@/organisms/upsells/triggerCard/TriggerCard";
import { BuilderCard } from "@/organisms/upsells/builderCard/BuilderCard";
import { EditableTitle } from "@/molecules";

export default function New() {
  const navigate = useNavigate();

  return (
    <UpsellsNewTemplate
      // backButtonText={"Upsells"}
      bottomButtonText="Create Upsell"
      bottomButtonOnClick={() => {
        navigate("/builder");
      }}
      // rightButtonText={"Publish Upsell"}
    >
      <EditableTitle
        className={classes.editable}
        type="h1"
        text="New upsell #1"
      />
      <TriggerCard />
      <BuilderCard />
    </UpsellsNewTemplate>
  );
}
