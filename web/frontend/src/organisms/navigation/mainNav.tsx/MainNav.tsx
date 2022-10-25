import { createElement } from "react";

import { Image, Button, Icon } from "@shopify/polaris";
import { NavLink } from "react-router-dom";

import classes from "./MainNav.module.scss";
import { upsells, performance, svgSettings } from "@/assets/svg";
import { DynamicPartTemplate } from "../dynamicPartTemplate/DynamicPartTemplate";

export function MainNav() {
  return (
    <DynamicPartTemplate
      leftSection={
        <>
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
              // className={classes.navIcon}
              source={performance}
              alt="Upsells"
              width={11}
            />
            <p>Performance</p>
          </NavLink>
        </>
      }
      buttonSection={
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
      }
    />
  );
}
