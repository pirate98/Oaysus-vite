import { useGetSeedDataQuery } from "@/data/backendApi";
import { UpsellsTemplate } from "@/templates";
import { DisplayProducts } from "@/organisms/upsells";

export default function Upsells() {
  const { data } = useGetSeedDataQuery(null);

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

  return (
    <UpsellsTemplate>
      <DisplayProducts />
    </UpsellsTemplate>
  );
}
