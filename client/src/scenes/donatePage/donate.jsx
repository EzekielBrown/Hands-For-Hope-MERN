import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Donate = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "5rem",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#BAC8C9",
          padding: "1rem",
          width: "100%",
          height: "120px",
          marginBottom: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
            fontSize: "40px",
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}
        >
          Donate
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: "medium", textAlign: "center", mb: "2rem" }}
      >
        Your donation will help us continue to provide support and resources to those in need. Together, we can make a difference in the world.
      </Typography>
      <Link to="/donate" style={{ textDecoration: "none" }}>
        <Button
          fullWidth
          sx={{
            fontSize: "18px",
            p: 1,
            width: "165px",
            bgcolor: "#BAC8C9",
            color: "white",
            borderRadius: 0,
            position: "relative",
            bottom: "20px", // Set the bottom margin to half of the button height
            "&:hover": {
              bgcolor: "#9CA8AA",
            },
          }}
        >
          Donate Now
        </Button>
      </Link>
    </Box>
  );
};

export default Donate;
