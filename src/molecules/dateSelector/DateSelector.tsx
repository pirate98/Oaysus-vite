import { Select } from "@/atoms";

export function DateSelector() {
  return <Select.Primary options={options} value={""} />;
}

const options = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: 20 },
  { label: "Last 7 days", value: 10 },
  { label: "Last 30 days", value: 10 },
  { label: "Last 90 days", value: 10 },
  { label: "Last month", value: 10 },
  { label: "Last year", value: 10 },
  { label: "Week to date", value: 10 },
  { label: "Month to date", value: 10 },
  { label: "Quarter to date", value: 10 },
  { label: "Year to date", value: 10 },
];
