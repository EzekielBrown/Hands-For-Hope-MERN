import {
  ManageAccountsOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
  TokenOutlined,
  PaidOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    amountDonated,
    tokens,
    friends,
  } = user;

  return (
    <Box
      sx={{
        padding: "1.5rem 1.5rem 0.75rem 1.5rem",
      }}
    >
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* LOCATION / JOB */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: "#62828F" }} />
          <Typography color="#1A1A1A">{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: "#62828F" }} />
          <Typography color="#1A1A1A">{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* AMOUNTDONATED / TOKENS */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <PaidOutlined fontSize="large" sx={{ color: "#62828F" }} />
          <Typography color={medium}>{amountDonated}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <TokenOutlined fontSize="large" sx={{ color: "#62828F" }} />
          <Typography color={medium}>{tokens}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserWidget;
