import { Button } from "@shopify/polaris";

import { UserTemplate } from "./userTemplate/UserTemplate";
import classes from "./UserTemplateBox.module.scss";
import { builderSettings } from "@/data/builderSettings";
import { useDispatch, useSelector } from "react-redux";
import { setComponentList } from "@/pages/builder/builderSlice";
import { RootState } from "@/data/store";

export function UserTemplateBox() {
  const dispatch = useDispatch();

  const {
    builder: { componentList },
  } = useSelector((state: RootState) => state);

  const handleClick = (idx: number) => {
    dispatch(setComponentList(builderSettings.templates[idx]));
  };

  return (
    <>
      <section>
        <div className={classes.titleContainer}>
          <p className={classes.text}>Your Templates</p>
          <Button>Create New</Button>
        </div>
      </section>
      {builderSettings.templates.map((template, idx) => {
        return (
          <UserTemplate
            onClick={() => handleClick(idx)}
            key={idx}
            isActive={
              JSON.stringify(template) === JSON.stringify(componentList)
            }
            name={`Template ${idx + 1}`}
          />
        );
      })}
    </>
  );
}
