import { Button } from "@shopify/polaris";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import classes from "./Builder.module.scss";
import { usePageButtons } from "../../hooks";
import { Page } from "../../organisms/builderPage/Page";
import { Components } from "../../organisms/builderComponents/Components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveComponent, setActiveMenu } from "./builderSlice";
import { Templates } from "../../organisms/builderTemplates/Templates";

import mockPage from "../../mockData/page1";
import { PageDemo } from "../../organisms/builderPage/pageDemo";

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
    builder: { activeMenu, activeComponent },
  } = useSelector((state) => state);

  const leftMenu = [{ title: "Templates" }, { title: "Components" }];

  return (
    <DndProvider backend={HTML5Backend}>
      <section className={classes.leftSection}>
        {!activeComponent && (
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
        )}
        {activeMenu === 0 ? <Templates /> : <Components />}
      </section>
      <main className={classes.main}>
        <section className={classes.rightSection}>
          {/* <Page pageContent={mockPage} /> */}
          {/* <PageDemo /> */}
        </section>
      </main>
    </DndProvider>
  );
}
