import classes from "./.module.scss";
import { Carousel } from "./Carousel";
import { builderSettings } from "@/data/builderSettings";

interface Props {
  content?: Record<any, any>;
  style?: Record<any, any>;
}

export function ImageSelector({ content, style }: Props) {
  return (
    <>
      {builderSettings?.imageDisplayTypes?.carousel ===
        content?.imageDisplayType && (
        <Carousel images={content?.images} imageStyle={style} />
      )}
      {builderSettings?.imageDisplayTypes?.custom ===
        content?.imageDisplayType && (
        <div
          className={classes.imageEmpty}
          style={{
            ...style,
            backgroundImage: content?.backgroundPreview,
          }}
        ></div>
      )}
      {builderSettings?.imageDisplayTypes?.single ===
        content?.imageDisplayType && (
        <div
          className={classes.image}
          style={{ ...style, backgroundImage: content?.images[0] }}
        ></div>
      )}
    </>
  );
}
