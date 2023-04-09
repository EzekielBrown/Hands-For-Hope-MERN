import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "900px",
        backgroundImage: `url("../assets/homehero.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#BAC8C9",
          padding: "2rem",
          height: "170px",
          width: "80%",
          maxWidth: "750px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: "25%",
          marginBottom: "-50px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "white",
            marginBottom: "1rem",
            fontSize: 50,
          }}
        >
          Join Hands, Spread Hope
        </Typography>

        <Typography
          variant="h5"
          sx={{ color: "white", marginBottom: "2rem", fontSize: 21 }}
        >
          Building a Stronger Community through Connections
        </Typography>
        <Link to="/donate" style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            sx={{
              fontSize: "18px",
              p: 1,
              width: "165px",
              bgcolor: "#EDC1B6",
              color: "white",
              borderRadius: 0,
              position: "relative",
              bottom: "20px", // Set the bottom margin to half of the button height
              "&:hover": {
                bgcolor: "#E85A4F",
              },
            }}
          >
            Help Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Hero;
