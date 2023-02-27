import Grid from "@mui/material/Grid";

export const Divider = () => {
  return (
    <Grid //divider
      sx={{
        borderTop: "1px solid",
        borderColor: "primary.main",
        width: "50%",
        marginY: "25px",
      }}
    />
  );
};
