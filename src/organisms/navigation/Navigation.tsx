import { Image } from "@shopify/polaris";
import { Link } from "react-router-dom";

import { logo } from "@/assets/svg";
import classes from "./Navigation.module.scss";

import { DynamicPartsSelector } from "./dynamicPartsSelector/DynamicPartsSelector";

const Navigation = () => {
  return (
    <div className={classes.container}>
      <Link to="/" className={classes.logoLink}>
        <Image className={classes.logo} source={logo} alt="Oaysus" />
      </Link>
      <div className={classes.linkContainer}>
        <DynamicPartsSelector />
      </div>
    </div>
  );
};

export default Navigation;
