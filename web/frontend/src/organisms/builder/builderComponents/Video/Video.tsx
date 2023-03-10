import { forwardRef } from "react";

import classes from "./.module.scss";
import { EditableWithToolBar } from "../../wrappers";
import { BuilderComponentProps } from "../../../../types/BuilderComponent.type";
import { filterOnlyStyleValues, makeEditorState } from "@/helpers/upsells";

const fn = forwardRef<HTMLDivElement>(
  ({ content, className }: BuilderComponentProps, ref) => {
    const styles = filterOnlyStyleValues(content);

    return (
      <div
        className={classes.componentContainer}
        style={{ backgroundColor: styles?.layout?.backgroundColor }}
        ref={ref}
      >
        <div className={classes.box}>
          <section className={classes.section}>
            <EditableWithToolBar
              module="title"
              data-oa-type="text"
              style={{
                ...styles?.title,
                display: content?.title.visibility ? "inherit" : "none",
              }}
              className={classes.title}
            >
              {content?.title?.editorState}
            </EditableWithToolBar>
            {content?.video?.url ? (
              <div className={classes.iframeParent}>
                <iframe
                  className={classes.iframe}
                  src={`https://www.youtube.com/embed/${content?.video?.url}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                  width={"400px"}
                />
              </div>
            ) : (
              <div
                className={classes.imageZone}
                style={{
                  backgroundImage:
                    'url("/image/play.svg"), url("/image/empty-video.svg")',
                  backgroundSize: false ? "cover" : "unset",
                  paddingBottom: "56.25%",
                }}
              ></div>
            )}
          </section>
        </div>
      </div>
    );
  }
);

const json = {
  layout: {
    backgroundColor: "#ffffff",
  },
  title: {
    editorState: makeEditorState("Video Block Title"),
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontSize: "24px",
    fontWeight: 600,
    fontColor: "#000000",
    visibility: true,
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  video: { url: "" },
};

Object.defineProperty(fn, "json", { value: json });

export const Video = fn;
