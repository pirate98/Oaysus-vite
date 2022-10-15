import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  addOrTrigger,
  deleteTrigger,
  updateTrigger,
} from "@/pages/upsells/upsellsSlice";
import { TriggerConditionSelector } from "../triggerConditionSelector/TriggerConditionSelector";
import classes from "./.module.scss";
import { ChangeEvent } from "react";

interface Props {
  triggerGroup?: Record<any, any>[];
  groupId?: number;
}

export function TriggerConditionGroup({ triggerGroup, groupId }: Props) {
  const dispatch = useDispatch();

  const handleChange = (
    { target }: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    console.log(target.value, target.name);
    const { name: key, value } = target;
    dispatch(updateTrigger({ groupId, conditionId: id, key, value }));
  };

  return (
    <section className={classes.triggerOrContainer}>
      {triggerGroup?.map((trigger, idx) => (
        <TriggerConditionSelector
          key={idx}
          // key={uuidv4()}
          conditionId={idx}
          conditionOptions={conditionOptions}
          operatorOptions={operatorOptions}
          conditionValue={trigger.condition}
          operatorValue={trigger.operator}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange(event, idx)
          }
          handleDelete={() =>
            dispatch(deleteTrigger({ groupId, conditionId: idx }))
          }
          showDelete={triggerGroup.length > 1}
          handleOr={() => dispatch(addOrTrigger({ id: groupId }))}
          showOr={idx === triggerGroup.length - 1}
        />
      ))}
    </section>
  );
}

const conditionOptions = [
  { label: "Product", value: "product" },
  {
    label: "Product Variant",
    value: "product_variant",
  },
  { label: "Collection", value: "collection" },
  { label: "Any Product", value: "any_product" },
  { label: "Item Quantity", value: "item_quantity" },
  { label: "Total Value", value: "total_value" },
  { label: "Customer Location", value: "customer_location" },
];

const operatorOptions = [
  { label: "Is", value: "===" },
  { label: "More than", value: ">" },
  { label: "Less than", value: "<" },
];
