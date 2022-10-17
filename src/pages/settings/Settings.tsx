import { Navigate, Route, Routes } from "react-router-dom";

import Billing from "./billing/Billing";
import General from "./general/General";
import { SettingsTemplate } from "@/templates";
import { NavigationPart } from "@/organisms/settings";

export default function Settings() {
  return (
    <SettingsTemplate
      navigationPart={
        <NavigationPart sx={{ textAlign: "start", marginRight: "132px" }} />
      }
    >
      <Routes>
        <Route path="/billing" element={<Billing />} />
        <Route path="/general" element={<General />} />
        <Route path="/*" element={<Navigate to="/settings/general" />} />
      </Routes>
    </SettingsTemplate>
  );
}
