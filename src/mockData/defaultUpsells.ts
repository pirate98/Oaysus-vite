import { CONSTANT } from "@/data/constants";

export type UpsellsData = {
  id: number;
  image: string;
  name: string;
  status: boolean;
  views: number;
  conversion: number;
  total: number;
  visit: number;
};

function createData(
  id: number,
  image: string,
  name: string,
  status: boolean,
  views: number,
  conversion: number,
  total: number,
  visit: number
): UpsellsData {
  return {
    id,
    image: image ? image : CONSTANT.IMAGE_PLACEHOLDER,
    name,
    status,
    views,
    conversion,
    total,
    visit,
  };
}

export const rows = [
  createData(1, "/image/guy_1.jpg", "Cupcake", true, 3.7, 67, 4.3, 5.67),
  createData(2, "/image/guy_2.webp", "Donut", false, 25.0, 51, 4.9, 5.67),
  createData(3, "", "Eclair", true, 16.0, 24, 6.0, 5.67),
  createData(4, "", "Frozen yoghurt", true, 6.0, 24, 4.0, 5.67),
  createData(5, "/image/guy_1.jpg", "Gingerbread", true, 16.0, 49, 3.9, 5.67),
  createData(6, "/image/guy_2.webp", "Honeycomb", false, 3.2, 87, 6.5, 5.67),
  createData(
    7,
    "/image/guy_2.webp",
    "Ice cream sandwich",
    false,
    9.0,
    37,
    4.3,
    5.67
  ),
  createData(8, "/image/guy_1.jpg", "Jelly Bean", false, 0.0, 94, 0.0, 5.67),
  createData(9, "", "KitKat", true, 26.0, 65, 7.0, 5.67),
  createData(10, "", "Lollipop", true, 0.2, 98, 0.0, 5.67),
];
