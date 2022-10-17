import classes from "./.module.scss";

interface Props {
  children: React.ReactNode;
}

export function Page({ children }: Props) {
  return <div className={classes.page}>{children}</div>;
}
