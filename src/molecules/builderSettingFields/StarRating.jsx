import { useState } from "react";

// import ReactStars from "react-rating-stars-component";
import Rating from "@mui/material/Rating";

import { SettingFieldContainer } from "../../atoms";

export function StarRating() {
  const [value, setValue] = useState(2);

  return (
    <SettingFieldContainer title="STAR RATING">
      <Rating name="read-only" value={value} readOnly />
    </SettingFieldContainer>
  );
}
