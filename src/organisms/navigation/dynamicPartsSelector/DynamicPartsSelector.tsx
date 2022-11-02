import { useLocation } from "react-router-dom";
import { BuilderNav } from "../builderNav/BuilderNav";
import { MainNav } from "../mainNav.tsx/MainNav";
import { UpsellsNav } from "../upsellsNav/UpsellsNav";

export function DynamicPartsSelector() {
  const location = useLocation();

  const { pathname } = location;

  if (pathname.startsWith("/builder")) return <BuilderNav />;

  if (pathname.startsWith("/upsells") && !pathname.endsWith("/upsells"))
    return <UpsellsNav />;

  return <MainNav />;
}
