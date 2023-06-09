import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
          backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 75%, transparent 75%, transparent)",
          backgroundSize: "100px 100px",
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
      <Box sx={{ py: 8, bgcolor: "#F5F5F5", padding: "0 30px 0 30px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
          Upcoming Events
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#4A5A67" }}>
                    <img
                      src="../assets/logo2.png"
                      alt="Hands For Hope"
                      height="100%"
                    />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Beach Clean Up"
                subheader="May 14, 2023"
              />
              <CardMedia
                component="img"
                height="194"
                image="../assets/beach.png"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The event aims to remove litter and plastic waste from the
                  beach and promote environmentally friendly practices.
                  Volunteers will be provided with gloves, bags, and other
                  necessary equipment, and will be treated to a free lunch after
                  the cleanup.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#4A5A67" }}>
                    <img
                      src="../assets/logo2.png"
                      alt="Hands For Hope"
                      height="100%"
                    />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Community Garden Setup"
                subheader="July 1, 2023"
              />
              <CardMedia
                component="img"
                height="194"
                image="../assets/garden.png"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The event will involve constructing raised garden beds,
                  preparing the soil, planting fruits and vegetables, and
                  installing a drip irrigation system. The garden will provide
                  fresh produce to the local community, promote sustainable
                  living practices, and provide an opportunity for community
                  members to come together and work towards a common goal.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#4A5A67" }}>
                    <img
                      src="../assets/logo2.png"
                      alt="Hands For Hope"
                      height="100%"
                    />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Grafiti Removal"
                subheader="August 23, 2023"
              />
              <CardMedia
                component="img"
                height="194"
                image="../assets/grafiti.png"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Volunteers will be provided with paint, brushes, and other
                  necessary equipment, and will work together to cover up the
                  graffiti and restore the affected area to its original state.
                  This event aims to promote community involvement in
                  maintaining the cleanliness and beauty of public spaces.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Events;
