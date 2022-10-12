import { Button, Card, Select } from "@/atoms";
import classes from "./.module.scss";
import { DeleteConditionSvg } from "../../../../assets/svg";

export function TriggerConditionSelector({
  conditionOptions,
  operatorOptions,
  conditionValue,
  operatorValue,
  onChange,
  conditionId,
  handleDelete,
  handleOr,
  showOr,
}) {
  return (
    <Card.Settings>
      <h2 className={classes.customH2}>
        Condition #{conditionId + 1}
        <span className={classes.deleteSvg}>
          <Button.HiddenWrapper onClick={handleDelete}>
            <DeleteConditionSvg />
          </Button.HiddenWrapper>
        </span>
      </h2>
      <div className={classes.inputContainer}>
        <p>If</p>{" "}
        <Select.Primary
          options={conditionOptions}
          value={conditionValue || conditionOptions[0]?.value || ""}
          name="condition"
          onChange={onChange}
          // sx={{ flexGrow: 1 }}
        />{" "}
        {conditionValue !== "any_product" ? (
          <>
            <Select.Small
              options={operatorOptions}
              value={operatorValue || operatorOptions[0]?.value || ""}
              onChange={onChange}
              name="operator"
            />
            {conditionValue === "product" ? (
              <Button.Primary size="sm" sx={{ flexGrow: 1 }}>
                Select Product(s)
              </Button.Primary>
            ) : null}
            {conditionValue === "product_variant" ? (
              <Button.Primary size="sm" sx={{ flexGrow: 1 }}>
                Select Variant(s)
              </Button.Primary>
            ) : null}
            {conditionValue === "collection" ? (
              <Button.Primary size="sm" sx={{ flexGrow: 1 }}>
                Select Collection)
              </Button.Primary>
            ) : null}
            {conditionValue === "customer_location" ? (
              <Button.Primary size="sm" sx={{ flexGrow: 1 }}>
                Select Location)
              </Button.Primary>
            ) : null}
            <Button.Gray size="sm">Edit Product(s)</Button.Gray>
          </>
        ) : null}
      </div>
      {showOr ? (
        <Button.Trigger
          size="sm"
          sx={{ alignSelf: "center" }}
          onClick={handleOr}
        >
          Or
        </Button.Trigger>
      ) : (
        <h2 className={classes.customH2}>Or</h2>
      )}
    </Card.Settings>
  );
}
