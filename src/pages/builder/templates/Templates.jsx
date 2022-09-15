import { Button } from "@shopify/polaris";
import { Template } from "./Template";
import classes from "./Templates.module.scss";

export function Templates() {
  return (
    <>
      <section>
        <div className={classes.titleContainer}>
          <p className={classes.text}>Your Templates</p>
          <Button>Create New</Button>
        </div>
      </section>
      <Template />
      <Template isActive={true} />
    </>
  );
}
