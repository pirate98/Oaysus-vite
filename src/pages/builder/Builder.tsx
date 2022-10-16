import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import classes from "./Builder.module.scss";
import {
  BuilderSideBarComponents,
  UserTemplateBox,
  BuilderComposition,
} from "@/organisms/builder";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPageComponentName, setActiveMenu } from "./builderSlice";
import { H5 } from "@/atoms";
import { RootState } from "../../data/store";

export default function Builder() {
  const dispatch = useDispatch();

  const {
    builder: { activeMenu, selectedPageComponentName, page },
  } = useSelector((state: RootState) => state);

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
                  <H5 className={classes.title} color={"muted"}>
                    {menu.title}
                  </H5>
                  <span></span>
                </div>
              ))}
            </div>
          )}
          {activeMenu === 0 ? (
            <BuilderSideBarComponents />
          ) : (
            <UserTemplateBox />
          )}
        </section>
        <main className={classes.main}>
          <section className={classes.rightSection}>
            <BuilderComposition pageContent={page} />
            {/* <PageDemo /> */}
          </section>
        </main>
      </div>
    </DndProvider>
  );
}

const leftMenu = [{ title: "Components" }, { title: "Templates" }];
