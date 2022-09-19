import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

export function ContentComponent({ content }) {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);

  const imageSection = (
    <img className={classes.image1} src={"/image/guy_1.jpg"} />
  );

  const textSection = (
    <Grid item sx={{ marginBottom: "2px" }}>
      <TextContainer>
        <Text style={{ ...userTitleStyle }} variant="headingXl" as="h3">
          {content.title.text}
        </Text>
        {/* <Grid container alignItems="">
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={22}
            activeColor="rgba(248, 152, 29, 1)"
          />
          <p className={classes.starText}>5.0 Best Seller</p>
        </Grid> */}
        <Text variant="bodyLg" as="p" style={{ ...userSubTitleStyle }}>
          {content.subTitle.text}
        </Text>
      </TextContainer>
    </Grid>
  );

  return (
    content && (
      <Grid container spacing={5} columnSpacing={4}>
        <Grid item xs={6}>
          {content.imagePosition === "left" ? imageSection : textSection}
        </Grid>
        <Grid item xs={6}>
          {content.imagePosition === "left" ? textSection : imageSection}
        </Grid>
      </Grid>
    )
  );
}
