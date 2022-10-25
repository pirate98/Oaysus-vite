import classes from "./SettingSectionContainer.module.scss";

export function SettingSectionContainer({ children }) {
  return (
    children && (
      <div className={classes.box}>
        {children.length > 1
          ? children.map((section, idx) => (
              <div key={idx}>
                {section}
                <div
                  className={idx !== children.length - 1 ? classes.divider : ""}
                ></div>
              </div>
            ))
          : children}
      </div>
    )
  );
}
