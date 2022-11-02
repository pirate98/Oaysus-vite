import { Select } from "@/atoms";

const options = [
  {
    label: "Edit",
  },
  {
    label: "Edit priority",
  },
  {
    label: "Duplicate",
  },
  {
    label: "Delete",
    className: "textRed",
  },
];

export function TableEditMenu() {
  return <Select.Upsell options={options} />;
}
