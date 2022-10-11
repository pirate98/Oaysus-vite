import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from "faker";
import { faker } from "@faker-js/faker";

import { formatAmountToCurrency } from "@/helpers";
import classes from "../.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      // display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["May", "June", "July", "August"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: Array.from(Array(6).keys()).map(() =>
        faker.datatype.number({ min: 0, max: 1000 })
      ),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};

export function AverageOrder() {
  return (
    <>
      <h2 className={classes.h2Thick}>Average Order Value</h2>
      <h1 className={classes.h1}>{formatAmountToCurrency(0)}</h1>
      <section className={classes.chartContainer}>
        <h3 className={classes.h3Performance + " " + classes.textGray}>
          AOV OVER TIME
        </h3>
        <div className={classes.canvas}>
          <Line options={options} data={data} />
        </div>
      </section>
    </>
  );
}
