import classes from "./.module.scss";

export function WithText({ text }) {
  return (
    <div>
      <section className={classes.container}>
        <div className={classes.verticalDivider}></div>
      </section>
      <p className={classes.p}>{text}</p>
      <section className={classes.container}>
        <div className={classes.verticalDivider}></div>
      </section>
    </div>
  );
}
