import { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { Divider } from "@/atoms";
import { UpsellNew } from "@/templates/upsellNew/UpsellNew";
import classes from "./Trigger.module.scss";
import { addAndTrigger, testTrigger } from "../upsellsSlice";
import { TriggerConditionGroup } from "./triggerConditionGroup/TriggerConditionGroup";
import { useNavigate } from "react-router-dom";

export function Trigger() {
  const {
    upsells: { triggers },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClickBottomButton = () => dispatch(addAndTrigger());

  const navigate = useNavigate();

  const handleClickRightButton = () => {
    dispatch(testTrigger());
    navigate("/upsells/new");
  };

  return (
    <UpsellNew
      backButtonText={"Back"}
      bottomButtonText="Add Condition"
      bottomButtonOnClick={handleClickBottomButton}
      rightButtonText={"Save trigger"}
      rightButtonOnClick={handleClickRightButton}
    >
      <h1 className={classes.customH1}>Trigger Conditions</h1>
      {triggers.map((triggerGroup, idx) => {
        return (
          <Fragment key={uuidv4()}>
            <TriggerConditionGroup groupId={idx} triggerGroup={triggerGroup} />
            {idx !== triggers.length - 1 ? <Divider.And /> : null}
          </Fragment>
        );
      })}
    </UpsellNew>
  );
}
