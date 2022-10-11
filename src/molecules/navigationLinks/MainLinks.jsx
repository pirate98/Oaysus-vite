import { createElement } from "react";

import { Image, Button, Icon } from "@shopify/polaris";
import { NavLink } from "react-router-dom";
import classes from "./.module.scss";
import { upsells, performance, svgSettings } from "@/assets/svg";

export function MainLinks() {
  return (
    <>
      <section className={classes.navLinks}>
        <NavLink
          to="/upsells"
          className={({ isActive }) =>
            isActive ? classes.navLinkActive : classes.navLink
          }
        >
          <Image source={upsells} alt="Upsells" width={11} />
          <p>View Upsells</p>
        </NavLink>
        <NavLink
          to="/performance"
          className={({ isActive }) =>
            isActive ? classes.navLinkActive : classes.navLink
          }
        >
          <Image
            className={classes.navIcon}
            source={performance}
            alt="Upsells"
            width={11}
          />
          <p>Performance</p>
        </NavLink>
      </section>
      <section className={classes.buttonGroup}>
        <NavLink to="/settings">
          <Button
            icon={
              <Icon
                source={() => createElement("img", { src: svgSettings })}
                color="base"
              />
            }
          >
            Settings
          </Button>
        </NavLink>
      </section>
    </>
  );
}
