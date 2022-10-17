import { Image } from "@shopify/polaris";
import { Link, useLocation } from "react-router-dom";

import { logo } from "@/assets/svg";
import classes from "./Navigation.module.scss";
import {
  MainLinks,
  BuilderLinks,
} from "@/organisms/navigation/navigationLinks";

const Navigation = () => {
  const location = useLocation();
  const builderIsLoaded = location.pathname.startsWith("/builder");

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.logoLink}>
        <Image className={classes.logo} source={logo} alt="Oaysus" />
      </Link>
      <div className={classes.linkContainer}>
        {builderIsLoaded ? <BuilderLinks /> : <MainLinks />}
      </div>
    </div>
  );
};

export default Navigation;