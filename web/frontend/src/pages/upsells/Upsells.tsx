import { useGetSeedDataQuery } from "@/data/backendApi";
import { UpsellsTemplate } from "@/templates";
import { DisplayProducts } from "@/organisms/upsells";
import { Header } from "@/organisms/upsells/header/Header";

export default function Upsells() {
  const { data } = useGetSeedDataQuery(null);

  // useEffect(() => {
  //   console.log({ data });
  // }, [data]);

  return (
    <UpsellsTemplate header={<Header />}>
      <DisplayProducts />
    </UpsellsTemplate>
  );
}
