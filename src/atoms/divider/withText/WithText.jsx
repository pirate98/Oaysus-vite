import classes from "./.module.scss";

export function WithText({ textElement }) {
  return (
    <div>
      <section className={classes.container}>
        <div className={classes.verticalDivider}></div>
      </section>
      {/* <p className={classes.p}>{text}</p> */}
      {textElement}
      <section className={classes.container}>
        <div className={classes.verticalDivider}></div>
      </section>
    </div>
  );
}
