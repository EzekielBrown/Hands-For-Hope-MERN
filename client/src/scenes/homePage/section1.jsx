import { Box, Typography } from "@mui/material";

const Section1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", textAlign: "center", mb: "2rem" }}
      >
        Section 1
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: "medium", textAlign: "center", maxWidth: "800px" }}
      >
        This is the content for section 1. You can add any text, images, or
        other components you like here.
      </Typography>
    </Box>
  );
};

export default Section1;
