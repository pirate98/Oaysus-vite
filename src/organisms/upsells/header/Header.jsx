import { Badge, CustomSelect, StyledOption, AddButton } from "../../../atoms";
import styles from "./Header.module.scss";
import svgSearch from "../../../assets/svg/search.svg";

export function Header() {
  return (
    <section>
      <h1 className={styles.h1}>Upsell Funnels</h1>
      <div className={styles.infoContainer}>
        <div className={styles.badgeContainer}>
          <Badge dotHalf={true}>4 Total</Badge>
          <Badge variant="green">3 Active</Badge>
          <Badge variant="gray">1 Inactive</Badge>
        </div>
        <div className={styles.searchContainer}>
          <img src={svgSearch} />
          <input placeholder="Search" className={styles.input} />
        </div>
        <div className={styles.filterContainer}>
          <CustomSelect defaultValue={10}>
            <StyledOption value={10}>Last 30 Days</StyledOption>
            <StyledOption value={20}>Last 20 Days</StyledOption>
            <StyledOption value={30}>Last 10 Days</StyledOption>
          </CustomSelect>
          <AddButton>Add Upsell</AddButton>
        </div>
      </div>
    </section>
  );
}
