import { useState } from "react";
import { useSelector } from "react-redux";

export function GoogleFonts() {
  const {
    builder: { pageComponents },
  } = useSelector((state) => state);

  const [fonts, setFonts] = useState([]);

  useEffect(() => {
    console.log("referesh fonts");
    const _fonts = [];
    pageComponents.forEach((component) => {
      for (const module in component) {
        for (const key in component[module]) {
          const value = component[module][key];
          if (key === "fontFamily" && value.length > 0) _fonts.push(value);
        }
      }
    });

    setFonts(
      _fonts
        .map(
          (font) =>
            `family=${font}:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500`
        )
        .reduce((prev, cur) => prev + "&" + cur)
    );
  }, [pageComponents]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href={`https://fonts.googleapis.com/css2?${fonts}&display=swap`}
        rel="stylesheet"
      />
    </>
  );
}
