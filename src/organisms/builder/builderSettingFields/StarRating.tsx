import { useState } from "react";

// import ReactStars from "react-rating-stars-component";
import Rating from "@mui/material/Rating";

import { Input, SettingField, SettingFieldContainer } from "@/atoms";
import { useGetSelectedPageComponent } from "@/hooks";
import { Visibility } from "./Visibility";
import { builderSettings } from "@/data/builderSettings";

const { reviews } = builderSettings.fieldNames;

interface Props {
  value?: string;
}

export function StarRating({ value }: Props) {
  const component = useGetSelectedPageComponent();

  return (
    <>
      <Visibility data={component[reviews]} />
      <SettingFieldContainer title="STAR RATING">
        <SettingField fieldName={"Rating"}>
          <Input name="rating" value={value} />
        </SettingField>
      </SettingFieldContainer>
    </>
  );
}
