import classes from "./.module.scss";
import { Carousel } from "./Carousel";
import { builderSettings } from "../../../data/builderSettings";

export function ImageSelector({ content, style }) {
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
