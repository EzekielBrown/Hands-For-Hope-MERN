import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FadeInObserver from "components/FadeInObserver";

const CallToAction = () => {
  return (
    <FadeInObserver>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
        backgroundColor: "#EDC1B6",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            mb: "2rem",
            color: "white",
            fontSize: "3rem",
          }}
        >
          Get involved!
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "medium",
          textAlign: "center",
          mb: "2rem",
          color: "white",
        }}
      >
        Join us in spreading hope and making a difference in the lives of those
        around us. Donate to or volunteer with Hands for Hope today.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "340px",
        }}
      >
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            sx={{
              fontSize: "18px",
              width: "165px",
              p: 1,
              bgcolor: "#BAC8C9",
              color: "white",
              borderRadius: 0,
              "&:hover": {
                bgcolor: "#9CA8AA",
              },
            }}
          >
            Help Out
          </Button>
        </Link>
        <Link to="/donate" style={{ textDecoration: "none" }}>
          <Button
            fullWidth
            sx={{
              fontSize: "18px",
              width: "165px",
              p: 1,
              bgcolor: "#BAC8C9",
              color: "white",
              borderRadius: 0,
              "&:hover": {
                bgcolor: "#9CA8AA",
              },
            }}
          >
            Donate
          </Button>
        </Link>
      </Box>
    </Box>
    </FadeInObserver>
  );
};

export default CallToAction;
