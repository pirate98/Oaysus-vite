import { createElement } from "react";

import { Image, Button, Icon } from "@shopify/polaris";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { logo, upsells, performance, svgSettings } from "../../assets/svg";
import classes from "./Navigation.module.scss";

const Navigation = () => {
  const {
    navigation: { pageButtons },
  } = useSelector((state) => state);

  return (
    <section className={classes.container}>
      <Image className={classes.logo} source={logo} alt="Oaysus" />
      <div className={classes.navLinks}>
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
      </div>
      <span className={classes.buttonGroup}>
        {pageButtons}
        <Button
          icon={
            <Icon
              source={() => createElement("src", { src: svgSettings })}
              color="base"
            />
          }
        >
          Settings
        </Button>
      </span>
    </section>
  );
};

export default Navigation;
