import classes from "./SettingBox.module.scss";

export function SettingBox({ children }) {
  return (
    children &&
    children.length && (
      <div className={classes.box}>
        {children.map((section, idx) => (
          <div key={idx}>
            {section}
            <div
              className={idx !== children.length - 1 ? classes.divider : ""}
            ></div>
          </div>
        ))}
      </div>
    )
  );
}
