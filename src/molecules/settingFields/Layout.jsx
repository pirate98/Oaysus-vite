import { SettingFieldContainer } from "../../atoms";
import classes from "./.module.scss";
import { layoutLeft, layoutRight } from "../../assets/svg";

export function Layout() {
  return (
    <SettingFieldContainer className={classes.layout}>
      <div>
        <img src={layoutLeft} />
        <p>Left</p>
      </div>
      <div>
        <img src={layoutRight} />
        <p>Right</p>
      </div>
    </SettingFieldContainer>
  );
}
