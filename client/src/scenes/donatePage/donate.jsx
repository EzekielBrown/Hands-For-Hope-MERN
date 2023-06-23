import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const user = useSelector((state) => state.user); // Get the current user

  const handleDonation = async () => {
    if (!user) {
      alert("Please log in to make a donation.");
      return;
    }

    try {
      const userId = user._id;
      const amount = donationAmount;
  
      console.log('userId:', userId);
      console.log('amount:', amount);
  
      const response = await axios.post("http://localhost:3001/donate", {
        userId,
        amount,
      });
      

      console.log(response.data);
    } catch (error) {
      console.error("Error making a donation:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 0 5rem 0",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#EDC1B6",
          backgroundImage:
            "linear-gradient(45deg, rgba(255,255,255,0.4) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 75%, transparent 75%, transparent)",
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
          Donate
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ px: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: "#BAC8C9", borderRadius: "0px" }}>
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "16px" }}>
                Thank you for considering donating to Hands for Hope! Your
                contribution will help us continue to provide valuable support
                to those in need within our community. By donating, you are
                helping us connect individuals who need help with small tasks,
                such as cooking for a small event or cleaning a local business,
                with volunteers who are willing to lend a hand. With your
                support, we can reach more people and make a greater impact in
                our community. Your donation will go directly towards
                maintaining our website and organizing events that benefit those
                in need. We appreciate your generosity and look forward to
                continuing to make a difference in our community together.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: "0px" }}>
            <Box sx={{ bgcolor: "#C7AEB4", color: "#fff", p: 2 }}>
              <Typography
                variant="h5"
                sx={{ textAlign: "center", fontSize: "26px" }}
              >
                Make a Donation
              </Typography>
            </Box>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography variant="body1" sx={{ flexGrow: 1 }}>
                  Enter Amount
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "right" }}>
                  NZD
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  label="Donation Amount"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{ inputProps: { min: 0 } }}
                  variant="outlined"
                  fullWidth
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  sx={{ mb: 2, width: "100%" }}
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
                  onClick={handleDonation}
                >
                  Donate
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Donate;
