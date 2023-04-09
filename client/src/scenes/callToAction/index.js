import { Box, Button, Typography } from "@mui/material";

const CallToAction = () => {
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
        Take Action Today
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: "medium", textAlign: "center", mb: "2rem" }}
      >
        Join us in making a difference in the world. Donate now to support our
        mission and help those in need.
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: "2rem",
          backgroundColor: "#3f51b5",
          color: "white",
          "&:hover": {
            backgroundColor: "#1e3a8a",
          },
        }}
      >
        Donate Now
      </Button>
    </Box>
  );
};

export default CallToAction;
