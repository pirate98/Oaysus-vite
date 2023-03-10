import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Divider, H6, P } from "@/atoms";
import { UpsellsNewTemplate } from "@/templates/upsellsNew/UpsellsNewTemplate";
import classes from "./Trigger.module.scss";
import { addAndTrigger, testTrigger } from "../upsellsSlice";
import { TriggerConditionGroup } from "@/organisms/upsells/triggerConditionGroup/TriggerConditionGroup";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/data/store";

export default function Trigger() {
  const {
    upsells: { triggers },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const handleClickBottomButton = () => dispatch(addAndTrigger());

  const navigate = useNavigate();

  const handleClickRightButton = () => {
    dispatch(testTrigger());
    navigate("/upsells/new");
  };

  return (
    <UpsellsNewTemplate
      backButtonText={"Back"}
      bottomButtonText="Add Condition"
      bottomButtonOnClick={handleClickBottomButton}
      // rightButtonText={"Save trigger"}
      // rightButtonOnClick={handleClickRightButton}
    >
      <h1 className={classes.customH1}>Trigger Conditions</h1>
      {triggers.map((triggerGroup, idx) => {
        return (
          <Fragment key={uuidv4()}>
            <TriggerConditionGroup groupId={idx} triggerGroup={triggerGroup} />
            {idx !== triggers.length - 1 ? (
              <Divider.WithText textElement={<H6 weight={500}>And</H6>} />
            ) : null}
          </Fragment>
        );
      })}
    </UpsellsNewTemplate>
  );
}
