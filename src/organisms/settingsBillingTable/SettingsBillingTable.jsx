import classes from "./SettingsBillingTable.module.scss";

const columnNames = ["Date", "Invoiced", "Revenue", "Plan"];

export function SettingsBillingTable({ data }) {
  return (
    <table className={classes.table}>
      <thead className={classes.thead}>
        <tr>
          {columnNames.map((name, idx) => (
            <th align="left" key={idx}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={classes.tbody}>
        {data.map((billing, idx) => (
          <tr key={idx}>
            <td>{billing.date}</td>
            <td>{billing.invoiced}</td>
            <td>{billing.revenue}</td>
            <td>{billing.plan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
