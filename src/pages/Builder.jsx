import { Button } from "@shopify/polaris";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import classes from "./builder/Builder.module.scss";
import { usePageButtons } from "../hooks";
import { Content } from "./builder/Content";
import { Components } from "./builder/Components";

export default function Builder() {
  const buttonContent = (
    <>
      <Button>Preview on store</Button>
      <Button primary>Save</Button>
    </>
  );

  usePageButtons({ content: buttonContent });

  return (
    <DndProvider backend={HTML5Backend}>
      <main className={classes.main}>
        <section className={classes.leftSection}>
          <div className={classes.leftMenu}>
            <div>
              <p>Templates</p>
              <span></span>
            </div>
            <div className={classes.divActive}>
              <p>Components</p>
              <span></span>
            </div>
          </div>
          <Components />
        </section>
        <section className={classes.rightSection}>
          <div className={classes.titleContainer}>
            <p className={classes.headlineWhite}>
              Add a Test T-shirt to your order
            </p>
            <p className={classes.h2}>Exclusive offer expires in: 05:05</p>
          </div>
          <div
            className={classes.imageZone}
            style={{
              backgroundImage: false
                ? false
                : 'url("/image/empty-image-dark.svg")',
              backgroundSize: false ? "cover" : "unset",
            }}
          ></div>
          <Content />
        </section>
      </main>
    </DndProvider>
  );
}
