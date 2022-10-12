import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import classes from "./Builder.module.scss";
import { Page } from "../../organisms/builderPage/Page";
import { BuilderMenu } from "../../organisms/builderMenu/BuilderMenu";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPageComponentName, setActiveMenu } from "./builderSlice";
import { Templates } from "../../organisms/builderTemplates/Templates";

export default function Builder() {
  const dispatch = useDispatch();

  const {
    builder: { activeMenu, selectedPageComponentName, page },
  } = useSelector((state) => state);

  const leftMenu = [{ title: "Components" }, { title: "Templates" }];

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <section className={classes.leftSection}>
          {!selectedPageComponentName && (
            <div className={classes.leftMenu}>
              {leftMenu.map((menu, idx) => (
                <div
                  key={`left-menu-${idx}`}
                  onClick={() => {
                    dispatch(setActiveMenu(idx));
                    dispatch(setSelectedPageComponentName(undefined));
                  }}
                  className={activeMenu === idx ? classes.divActive : ""}
                >
                  <p>{menu.title}</p>
                  <span></span>
                </div>
              ))}
            </div>
          )}
          {activeMenu === 0 ? <BuilderMenu /> : <Templates />}
        </section>
        <main className={classes.main}>
          <section className={classes.rightSection}>
            <Page pageContent={page} />
            {/* <PageDemo /> */}
          </section>
        </main>
      </div>
    </DndProvider>
  );
}
