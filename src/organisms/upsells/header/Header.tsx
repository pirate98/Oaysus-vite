import { NavLink } from "react-router-dom";

import { Badge } from "@/atoms";
import classes from "./Header.module.scss";
import svgSearch from "@/assets/svg/search.svg";
import { Button } from "@/atoms/button";
import { AddPlus } from "@/assets/svg";
import { DateSelector } from "@/molecules";

export function Header() {
  return (
    <div>
      <div className={classes.infoContainer}>
        <section>
          <h1 className={classes.h1Big}>Upsell Funnels</h1>
          <div className={classes.badgeContainer}>
            <Badge full={false}>4 Total</Badge>
            <Badge variant="green">3 Active</Badge>
            <Badge variant="gray">1 Inactive</Badge>
          </div>
        </section>
        <section className={classes.searchContainer}>
          <img src={svgSearch} />
          <input placeholder="Search" className={classes.input} />
        </section>
        <section className={classes.filterContainer}>
          <DateSelector />
          <NavLink to="/upsells/new">
            <Button.Primary size={"sm"}>
              <AddPlus />
              Add Upsell
            </Button.Primary>
          </NavLink>
        </section>
      </div>
    </div>
  );
}

const styles = {
  addButton: {
    padding: "0 16px",
    width: "unset",
    fontSize: "14px",
    svg: {
      marginRight: "8px",
    },
  },
};
