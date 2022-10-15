import classes from "./SettingsBillingTable.module.scss";

const columnNames = ["Date", "Invoiced", "Revenue", "Plan"];

type Billing = {
  date: string;
  invoiced: boolean;
  revenue: string;
  plan: string;
};

interface Props {
  data: Billing[];
}

export function SettingsBillingTable({ data }: Props) {
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
        )) || (
          <tr>
            <td colSpan={4} className={classes.noTransaction}>
              No posted transactions
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
