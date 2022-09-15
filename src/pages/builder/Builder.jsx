import { Button } from "@shopify/polaris";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import classes from "./Builder.module.scss";
import { usePageButtons } from "../../hooks";
import { Content } from "../../organisms/builderContent/Content";
import { Components } from "../../organisms/builderComponents/Components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent, setActiveMenu } from "./builderSlice";
import { Templates } from "../../organisms/builderTemplates/Templates";

export default function Builder() {
  const buttonContent = (
    <>
      <Button>Preview on store</Button>
      <Button primary>Save</Button>
    </>
  );

  usePageButtons({ content: buttonContent });

  const dispatch = useDispatch();

  const {
    builder: { activeMenu },
  } = useSelector((state) => state);

  const leftMenu = [{ title: "Templates" }, { title: "Components" }];

  return (
    <DndProvider backend={HTML5Backend}>
      <section className={classes.leftSection}>
        <div className={classes.leftMenu}>
          {leftMenu.map((menu, idx) => (
            <div
              key={`left-menu-${idx}`}
              onClick={() => {
                dispatch(setActiveMenu(idx));
                dispatch(setActiveComponent(undefined));
              }}
              className={activeMenu === idx ? classes.divActive : ""}
            >
              <p>{menu.title}</p>
              <span></span>
            </div>
          ))}
        </div>
        {activeMenu === 0 ? <Templates /> : <Components />}
      </section>
      <main className={classes.main}>
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
