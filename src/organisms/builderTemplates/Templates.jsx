import { Button } from "@shopify/polaris";

import { Template } from "./Template";
import classes from "./Templates.module.scss";
import { builderSettings } from "../../data/builderSettings";

export function Templates() {
  return (
    <>
      <section>
        <div className={classes.titleContainer}>
          <p className={classes.text}>Your Templates</p>
          <Button>Create New</Button>
        </div>
      </section>
      {builderSettings.templates.map((undefined, idx) => (
        <Template key={idx} isActive={false} name={`Template ${idx + 1}`} />
      ))}
    </>
  );
}
