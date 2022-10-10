import { Badge, CustomSelect, StyledOption } from "../../atoms";
import classes from "./Header.module.scss";
import svgSearch from "../../assets/svg/search.svg";
import { Button } from "@/atoms/button";
import { AddPlus } from "@/assets/svg";

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

export function Header() {
  return (
    <section>
      <h1 className={classes.h1}>Upsell Funnels</h1>
      <div className={classes.infoContainer}>
        <div className={classes.badgeContainer}>
          <Badge dotHalf={true}>4 Total</Badge>
          <Badge variant="green">3 Active</Badge>
          <Badge variant="gray">1 Inactive</Badge>
        </div>
        <div className={classes.searchContainer}>
          <img src={svgSearch} />
          <input placeholder="Search" className={classes.input} />
        </div>
        <div className={classes.filterContainer}>
          <CustomSelect defaultValue={10}>
            <StyledOption value={10}>Last 30 Days</StyledOption>
            <StyledOption value={20}>Last 20 Days</StyledOption>
            <StyledOption value={30}>Last 10 Days</StyledOption>
          </CustomSelect>
          <Button.Primary sx={styles.addButton}>
            <AddPlus />
            Add Upsell
          </Button.Primary>
        </div>
      </div>
    </section>
  );
}
