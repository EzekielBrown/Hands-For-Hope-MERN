import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const Events = () => {
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
          Events
        </Typography>
      </Box>
      <Box sx={{ py: 8, bgcolor: "#F5F5F5" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
          Upcoming Events
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Event Title 1
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: MM/DD/YYYY
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Event Title 2
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: MM/DD/YYYY
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Event Title 3
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Date: MM/DD/YYYY
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Events;
