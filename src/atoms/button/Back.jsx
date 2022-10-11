import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export function Back({ children }) {
  return (
    <>
      <ArrowBackIosNewIcon sx={{ height: "15px" }} />
      <p>{children}</p>
    </>
  );
}
