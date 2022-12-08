import { NavLink } from "react-router-dom";

import { Badge, H1, P } from "@/atoms";
import classes from "./Header.module.scss";
import svgSearch from "@/assets/svg/search.svg";
import { Button } from "@/atoms/button";
import { AddPlus } from "@/assets/svg";
import { CustomDateRangePickerDay } from "@/molecules";

export function Header() {
  return (
    <div>
      <div className={classes.infoContainer}>
        <H1 className={classes.customH1} height={29}>
          Upsell Funnels
        </H1>
        <section className={classes.searchContainer}>
          <img src={svgSearch} />
          <input placeholder="Search" className={classes.input} />
        </section>
        <section className={classes.filterContainer}>
          <CustomDateRangePickerDay />
          <NavLink to="/upsells/new">
            <Button.Primary small>
              <>
                <AddPlus />
                <P>Add Upsell</P>
              </>
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
