import classes from "./.module.scss";

export function ColorSelector({ title }) {
  return (
    <div className={classes.singleAttribute}>
      <p>{title}</p>
      <div className={classes.colorInputContainer}>
        <label htmlFor="input-color">
          <span className={classes.colorPicker}></span>
        </label>
        <input className={classes.input}></input>
        <input id="input-color" type="color" className={classes.inputColor} />
      </div>
    </div>
  );
}
