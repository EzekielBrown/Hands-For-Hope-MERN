import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <a href="/">
          <img src="../assets/logo.png" alt="Hands For Hope" width="113px" />
        </a>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        backgroundColor={theme.palette.primary.main}
      >
        {" "}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <Box>
    <Typography
      variant="h1"
      color={theme.palette.primary.text}
      sx={{ mb: "1.5rem" }}
    >
      Login
    </Typography>
  </Box>
</Box>

        <Typography
          fontWeight="500"
          variant="h5"
          color={theme.palette.primary.text}
          sx={{ mb: "1.5rem" }}
        >
          We're grateful for your support and commitment to making a difference
          in the lives of those in need. To access your account and to start volunteering, please login below!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
