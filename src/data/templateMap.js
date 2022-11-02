const templateMap = {
  incentive: {
    title: { style, margin, padding },
    subTitle: { style, margin, padding },
    countdown: ["duration", "visibility"],
    background,
    layout: { margin, padding },
  },
  banner: { sizing, background: { image } },
  content: {
    title: { style, margin, padding },
    subTitle: { style, margin, padding },
    description: { style, margin, padding },
    background,
    layout: { margin, padding },
  },
  product: { layout, description: { style, margin, padding } },
  video: { title: { style, margin, padding }, videoUrl },
  callToAction: {
    title: { style, margin, padding },
    background: { color, image, position },
    subTitle: { style, margin, padding },
    buyButton: { style, margin, padding, size, border },
  },
};

const style = ["fontStyle", "fontFamily, lineHeight, fontSize,", "fontColor"];
const margin = ["top", "bottom", "right", "left"];
const padding = ["top", "bottom", "right", "left"];
const background = ["color", "image", "position"];
const size = ["width"];
const videoUrl = ["youtubeUrl"];
const border = ["width", "radius", "color"];
const layout = [" productLayout"];
const sizing = ["height"];
