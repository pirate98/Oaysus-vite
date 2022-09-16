import classes from "./SettingSectionContainer.module.scss";

export function SettingSectionContainer({ children }) {
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
