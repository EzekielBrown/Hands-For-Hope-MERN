import { Box, Grid, Link, Typography, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#4A5A67",
        padding: "2rem",
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
      }}
    >
      <Grid container spacing={2}>
        {/* First column */}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ width: "100%", maxWidth: "100%" }}
          
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <a href="/">
              <img
                src="../assets/logo.png"
                alt="Hands For Hope"
                width="113px"
              />
            </a>

            <Typography
              variant="body2"
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "row",
                paddingBottom: "1rem",
              }}
            >
              <Link
                href="/volunteer"
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                  textDecoration: "none",
                  marginRight: "1rem",
                }}
              >
                Volunteer
              </Link>
              <Link
                href="/events"
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                  textDecoration: "none",
                  marginRight: "1rem",
                }}
              >
                Events
              </Link>
              <Link
                href="/contact"
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                  textDecoration: "none",
                  marginRight: "1rem",
                }}
              >
                Contact
              </Link>
              <Link
                href="/profile"
                sx={{
                  textTransform: "uppercase",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                My Profile
              </Link>
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
                  "&:hover": {
                    bgcolor: "#E85A4F",
                  },
                }}
              >
                Donate
              </Button>
            </Link>
            <Typography
              variant="body2"
              sx={{ color: "white", marginTop: "1rem" }}
            >
              © 2023 Hands for Hope. All rights reserved.
            </Typography>
          </Box>
        </Grid>

        {/* Second column */}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "330px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#EDC1B6",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginBottom: "0.5rem",
              }}
            >
              <Box
                sx={{ width: "35px", display: "flex", alignItems: "center" }}
              >
                <PhoneIcon sx={{ color: "#fff", marginRight: "0.5rem" }} />
              </Box>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                0800 4869 4619
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#BAC8C9",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginBottom: "0.5rem",
              }}
            >
              <Box
                sx={{ width: "35px", display: "flex", alignItems: "center" }}
              >
                <LocationOnIcon sx={{ color: "#fff", marginRight: "0.5rem" }} />
              </Box>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                4 Hope st, Nelson NZ
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#EDC1B6",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginBottom: "0.5rem",
              }}
            >
              <Box
                sx={{ width: "35px", display: "flex", alignItems: "center" }}
              >
                <EmailIcon sx={{ color: "#fff", marginRight: "0.5rem" }} />
              </Box>
              <Typography variant="body1" sx={{ color: "#fff" }}>
                help@handforhope.com
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Third column */}
        <Grid item xs={12} sm={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              Hands for Hope is a community-based charity dedicated to
              supporting local businesses andindividuals during tough times. Our
              goal is to inspire hope, foster a senseof community, and empower
              individuals and businesses through our programs and initiatives.
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Link href="https://www.facebook.com/" target="_blank">
                <FacebookIcon sx={{ fontSize: "2rem" }} />
              </Link>
              <Link href="https://twitter.com/" target="_blank">
                <TwitterIcon sx={{ fontSize: "2rem" }} />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <InstagramIcon sx={{ fontSize: "2rem" }} />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
