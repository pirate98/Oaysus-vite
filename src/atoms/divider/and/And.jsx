import classes from "./.module.scss";

export function And() {
  return (
    <div>
      <section className={classes.container}>
        <div className={classes.verticalDivider}></div>
      </section>
      <p className={classes.p}>And</p>
      <section className={classes.container}>
        <div className={classes.verticalDivider}></div>
      </section>
    </div>
  );
}
