import { NavLink } from "react-router-dom";

import { Primary } from "../Primary";
import { AddPlus } from "@/assets/svg";
import classes from "./Upsell.module.scss";
import { Card } from "@/atoms";

export function Upsell({ children, to = "/" }) {
  return (
    <div className={classes.upsellBtnContainer}>
      <NavLink to={to} className={classes.link}>
        <Primary
          sx={{
            padding: 0,
            height: "30px",
            minWidth: "30px",
            margin: "auto",
          }}
        >
          <AddPlus />
        </Primary>
        <p className={classes.text}>{children}</p>
      </NavLink>
    </div>
  );
}
