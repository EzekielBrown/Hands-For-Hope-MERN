import { Box, Typography } from "@mui/material";

const Mission = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F9FAFB",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#BAC8C9",
          padding: "1rem",
          width: "100%",
          height: "120px",
          marginBottom: "1rem",
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
            fontSize: "30px",
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}
        >
          Our Mission
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: "90%",
          height: "250px"
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontSize: "20px" }}
        >
          Our mission at Hands for Hope is to support our local community and
          businesses during tough times. Through community engagement,
          sustainability efforts, and empowerment programs, we strive to inspire
          hope and create a brighter future for all.
        </Typography>
      </Box>
    </Box>
  );
};

export default Mission;
