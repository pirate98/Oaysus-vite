import { Image } from "@shopify/polaris";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { logo } from "@/assets/svg";
import classes from "./Navigation.module.scss";
import { MainLinks, BuilderLinks } from "@/molecules/navigationLinks/";

const Navigation = () => {
  const {
    navigation: { pageButtons },
  } = useSelector((state) => state);

  const location = useLocation();
  const builderIsLoaded = location.pathname.startsWith("/builder");

  return (
    <div className={classes.container}>
      <NavLink to="/">
        <Image className={classes.logo} source={logo} alt="Oaysus" />
      </NavLink>
      <div className={classes.linkContainer}>
        {builderIsLoaded ? <BuilderLinks /> : <MainLinks />}
      </div>
    </div>
  );
};

export default Navigation;
