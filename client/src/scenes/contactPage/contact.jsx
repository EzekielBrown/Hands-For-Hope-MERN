import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
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
          Contact
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Grid container spacing={4} sx={{ width: "1000px" }}>
          {/* Form column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "100%",
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                Contact Us
              </Typography>
              <form>
                <TextField
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ width: "100%" }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ width: "100%" }}
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ width: "100%" }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  sx={{ width: "100%" }}
                />
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
                  Send
                </Button>
              </form>
            </Box>
          </Grid>

          {/* Charity info column */}

          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
                Contact Information
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                  bgcolor: "#EDC1B6",
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon sx={{ color: "#fff", fontSize: "30px" }} />
                </Box>
                <Box>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    0800 4869 4619
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                  bgcolor: "#BAC8C9",
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                <LocationOnIcon sx={{ color: "#fff", marginRight: "0.5rem" }} />
                </Box>
                <Box>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  4 Hope st, Nelson NZ
                </Typography>
              </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                  bgcolor: "#EDC1B6",
                }}
              >
                <Box
                  sx={{
                    height: "50px",
                    width: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                <EmailIcon sx={{ color: "#fff", marginRight: "0.5rem" }} />
                                </Box>
                <Box>
                <Typography variant="body1" sx={{ color: "#fff" }}>
                  help@handforhope.com
                </Typography>
              </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
