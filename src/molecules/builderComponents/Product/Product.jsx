import { forwardRef, useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Grid from "@mui/material/Grid";
import { TextContainer, Stack, Text } from "@shopify/polaris";
import ReactStars from "react-rating-stars-component";

import { SwiperPrev, SwiperNext } from "../../../assets/svg";
import classes from "./.module.scss";
import { filterOnlyStyleValues, makeEditorState } from "../../helpers/builder";
import { EditableWithToolBar } from "../../wrappers/";
import { BuilderButton } from "../../../atoms";

const fn = forwardRef(({ content, className }, ref) => {
  const styles = filterOnlyStyleValues(content);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiper, setSwiper] = useState(null);

  // useEffect(() => {
  // console.log(thumbsSwiper);
  // console.log({ swiper });
  // }, [swiper]);

  return (
    <Grid
      item
      container
      ref={ref}
      columnSpacing={3}
      className={
        classes.componentContainer + (className ? ` ${className}` : "")
      }
      sx={{ ...styles.layout }}
    >
      <Grid
        item
        xs={6}
        className={content.imagePosition === "right" ? classes.order1 : ""}
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(e) => console.log("slide change", e)}
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[Thumbs]}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          // navigation={true}
        >
          {content.images.map((url, idx) => {
            return (
              <SwiperSlide key={idx} className={classes.w100}>
                {/* {({ isActive }) =>
                  isActive && ( */}
                <div
                  className={classes.image}
                  style={{ ...styles.image, backgroundImage: url }}
                ></div>
                {/* )                } */}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          spaceBetween={10}
          modules={[Thumbs]}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          // freeMode={true}
          className={classes.swiperThumbs}
          thumbsContainerClass={classes.swiperWrapper}
        >
          {content.images.map((url, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  className={classes.thumbnail}
                  style={{ backgroundImage: url }}
                ></div>
              </SwiperSlide>
            );
          })}
          <span
            className={classes.backArrow}
            onClick={() => swiper.slidePrev()}
          >
            <SwiperPrev />
          </span>
          <span
            className={classes.arrowContainer}
            onClick={() => swiper.slideNext()}
          >
            <SwiperNext />
          </span>
        </Swiper>
        {/* <img style={styles.image} src={"/image/guy_1.jpg"} /> */}
      </Grid>
      <Grid item xs={6} container spacing={2} alignContent="baseline">
        <Grid item sx={{ marginBottom: "2px" }}>
          <TextContainer>
            <EditableWithToolBar
              // hidden={true}
              style={{
                ...styles.title,
              }}
              // name="product"
              // module="product"
              // data-oa-type="text"
              module="product"
              type="h3"
            >
              {content?.title?.editorState}
            </EditableWithToolBar>
            <Grid
              container
              sx={{
                display: content?.reviews?.visibility ? "flex" : "none",
              }}
            >
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={22}
                activeColor="rgba(248, 152, 29, 1)"
              />
              <p className={classes.starText}>5.0 Best Seller</p>
            </Grid>
            <EditableWithToolBar
              // hidden={true}
              style={{
                ...styles.description,
              }}
              name="description"
              module="description"
              data-oa-type="text"
              type="p"
            >
              {content.description?.editorState}
            </EditableWithToolBar>
          </TextContainer>
        </Grid>
        <Grid item xs={12}>
          <Stack distribution="fill" vertical spacing="tight">
            <Stack distribution="equalSpacing">
              <Text color="subdued" fontWeight="semibold">
                Subtotal
              </Text>
              <Text color="subdued" fontWeight="semibold">
                $ 20.00
              </Text>
            </Stack>
            <Stack distribution="equalSpacing">
              <Text color="subdued" fontWeight="semibold">
                Taxes
              </Text>
              <Text color="subdued" fontWeight="semibold">
                N/A
              </Text>
            </Stack>
            <div className={classes.divider}></div>
            <Stack distribution="equalSpacing">
              <Text fontWeight="semibold">Total</Text>
              <Text fontWeight="semibold">$ 20.00</Text>
            </Stack>
          </Stack>
        </Grid>
        <Grid item>
          {/* <ButtonGroup fullWidth> */}
          <BuilderButton sx={{ ...styles.buyButton }}>Buy Now</BuilderButton>
          <BuilderButton color={"white"} sx={{ ...styles.declineButton }}>
            Decline this offer
          </BuilderButton>
        </Grid>
      </Grid>
    </Grid>
  );
});

const json = {
  name: "",
  imagePosition: "left",
  layout: {
    paddingTop: "42px",
    paddingRight: "",
    paddingBottom: "20px",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
  reviews: {
    visibility: true,
  },
  image: {
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  images: [
    "url(/mockData/flowers.jpg)",
    "url(/mockData/puppy.jpg)",
    "url(/mockData/strategy.jpg)",
    "url(/image/guy_1.jpg)",
  ],
  title: {
    editorState: makeEditorState("Test T-shirt"),
    color: "#000000",
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "20px",
    fontSize: "24px",
  },
  description: {
    editorState:
      makeEditorState(`Include a short, benefit-driven description of what your product\
    does and how it can improve your customer's life.`),
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: "24px",
    fontSize: "16px",
    color: "#000000",
    paddingTop: "",
    paddingRight: "",
    paddingBottom: "",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginLeft: "",
    marginRight: "",
  },
  subTitle: {
    editorState: makeEditorState(""),
    price: 20,
    fontFamily: "Roboto",
    lineHeight: "20px",
    fontWeight: 400,
    fontSize: "16px",
    fontColor: "#000000",
    padding: 0,
    margin: 0,
    visibility: true,
  },
  buyButton: {
    marginBottom: "10px",
  },
  declineButton: {
    marginBottom: "10px",
  },
};

Object.defineProperty(fn, "json", { value: json });

export const Product = fn;
