import { forwardRef } from "react";

import Grid from "@mui/material/Grid";
import { TextContainer, Text } from "@shopify/polaris";

import classes from "./.module.scss";
import { styleFilter } from "../helpers/builder";

export const Content1Component = forwardRef(({ content }, ref) => {
  const userTitleStyle = styleFilter(content.title);
  const userSubTitleStyle = styleFilter(content.subTitle);

  const imageSection = (
    // <img
    //   className={classes.image1}
    //   src={
    //     content.images ? content.images[0].url : "/image/empty-image-dark.svg"
    //   }
    // />

    <div
      className={classes.image1}
      style={{
        backgroundImage: content.images
          ? `url(${content.images[0].url})`
          : 'url("/image/empty-image-dark.svg")',
        backgroundSize: content.images ? "cover" : "unset",
      }}
    ></div>
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
      <Grid item container ref={ref}>
        <Grid item xs={6}>
          {content.imagePosition === "left" ? imageSection : textSection}
        </Grid>
        <Grid item xs={6}>
          {content.imagePosition === "left" ? textSection : imageSection}
        </Grid>
      </Grid>
    )
  );
});
