import { Button } from "@shopify/polaris";

import { Template } from "./template/Template";
import classes from "./BuilderSideBarTemplates.module.scss";
import { builderSettings } from "@/data/builderSettings";
import { useDispatch, useSelector } from "react-redux";
import { setComponentList } from "@/pages/builder/builderSlice";

export function BuilderSideBarTemplates() {
  const dispatch = useDispatch();

  const {
    builder: { componentList },
  } = useSelector((state) => state);

  const handleClick = (idx) => {
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
          <Template
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
