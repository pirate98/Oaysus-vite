import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { Page } from "@/atoms";

interface Props {
  navigationPart: React.ReactNode;
  children: React.ReactNode;
}

export function SettingsTemplate({ navigationPart, children }: Props) {
  return (
    <Page>
      <Grid container flexDirection={"row"}>
        {navigationPart}
        <Box sx={styles.rightSection}>{children}</Box>
      </Grid>
    </Page>
  );
}

const styles = {
  rightSection: {
    flexGrow: 1,
    "& > div": {
      marginBottom: "24px",
    },
    width: "min-content",
  },
};
