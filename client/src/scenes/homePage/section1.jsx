import { Box, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FadeInObserver from "components/FadeInObserver";

const Section1 = () => {
  return (
    <FadeInObserver>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#C7AEB4",
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
            Volunteer
          </Typography>
        </Box>

        <Box
          sx={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={4} sx={{ width: "100%", height: "100%" }}>
            {/* Text column */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#BAC8C9",
                  padding: "2rem",
                  width: "90%",
                  height: "250px",
                  position: "relative",
                  maxHeight: "600px",
                  maxWidth: "800px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    fontSize: "20px",
                  }}
                >
                  Volunteering is an incredible way to make a difference in your
                  community and the world. At Hands for Hope, we believe that
                  everyone has something to offer and can contribute to a
                  brighter future. Whether you're interested in working directly
                  with those in need, or supporting the behind-the-scenes work
                  that keeps our organization running, we have a role for you.
                  Join our team of passionate volunteers today and make a
                  positive impact in the lives of others.
                </Typography>

                <Link to="/volunteer" style={{ textDecoration: "none" }}>
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
                    Get Started
                  </Button>
                </Link>
              </Box>
            </Grid>

            {/* Image column */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  maxHeight: "600px",
                  maxWidth: "800px",
                }}
              >
                <img
                  src="../assets/volunteerwork2.png"
                  alt="volunteers"
                  style={{ width: "90%", height: "70%", objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </FadeInObserver>
  );
};

export default Section1;
