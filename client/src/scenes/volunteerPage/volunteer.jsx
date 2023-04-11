import { Box, Typography } from "@mui/material";

const Volunteer = () => {
  return (
      <Box
        sx={{
          backgroundColor: "#BAC8C9",
          backgroundImage:
            "linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 75%, transparent 75%, transparent)",
          backgroundSize: "100px 100px",
          padding: "1rem",
          width: "100%",
          height: "120px",
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
          Volunteer
        </Typography>
      
    </Box>
  );
};

export default Volunteer;
