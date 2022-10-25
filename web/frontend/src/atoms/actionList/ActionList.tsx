import classes from "./ActionList.module.scss";

interface Props {
  items: any[];
}

export function ActionList({ items }: Props) {
  return (
    items &&
    items.length && (
      <ul className={classes.ul}>
        {items.map((item, idx) => (
          <li key={`menu-item-${idx}`} className={classes.li}>
            {item.content}
          </li>
        ))}
      </ul>
    )
  );
}
