import { Box, Typography} from "@mui/material";

const Volunteer = () => {
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
          Volunteer
        </Typography>
      </Box>
    </Box>
  );
};

export default Volunteer;
