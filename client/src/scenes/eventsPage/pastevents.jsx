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

const PastEvents = () => {
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
      <Box sx={{ py: 8, bgcolor: "#F5F5F5", padding: "0 30px 0 30px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
          Past Events
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
                title="Bike Restoration"
                subheader="May 14, 2023"
              />
              <CardMedia
                component="img"
                height="194"
                image="../assets/bike.png"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                The event aims to collect old, unused bikes from community members, repair them, and donate them to those in need. Volunteers will help collect bikes, perform basic repairs, and prepare the bikes for donation.
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
                title="Electronic Repair"
                subheader="July 1, 2023"
              />
              <CardMedia
                component="img"
                height="194"
                image="../assets/electronic.png"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                The event aims to repair and refurbish old electronics and appliances to give them a second life, rather than throwing them away. Volunteers will help collect broken appliances and electronics, troubleshoot issues, and repair them if possible.
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
                title="Pet Event"
                subheader="August 23, 2023"
              />
              <CardMedia
                component="img"
                height="194"
                image="../assets/pet.png"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                The event aims to connect local animal shelters with potential adopters, and provide a fun and informative environment for pet owners and animal lovers. Volunteers will help with setting up booths, caring for animals, providing information about pet care, and facilitating adoptions.
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

export default PastEvents;
