import classes from "./DynamicPartTemplate.module.scss";

interface Props {
  leftSection: React.ReactNode;
  buttonSection: React.ReactNode;
  middleSection?: React.ReactNode;
}

export function DynamicPartTemplate({
  leftSection,
  buttonSection,
  middleSection,
}: Props) {
  return (
    <>
      <section className={classes.leftSection}>{leftSection}</section>
      {middleSection && <section className={classes.screenButtons}></section>}
      <section className={classes.buttonGroup}>{buttonSection}</section>
    </>
  );
}
