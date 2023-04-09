import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "state";
import FlexBetween from "components/FlexBetween";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <a href="/">
          <img src="../assets/logo.png" alt="Hands For Hope" width="113px" />
        </a>
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="3rem">
          <Typography variant="h4">
            <Link
              to="/volunteer"
              style={{
                textDecoration: "none",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Volunteer
            </Link>
          </Typography>
          <Typography variant="h4">
            <Link
              to="/events"
              style={{
                textDecoration: "none",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Events
            </Link>
          </Typography>
          <Typography variant="h4">
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "white",
                textTransform: "uppercase",
              }}
            >
              Contact
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
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <Typography variant="h4">
              <Link
                to="/volunteer"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  textTransform: "uppercase",
                }}
              >
                Volunteer
              </Link>
            </Typography>
            <Typography variant="h4">
              <Link
                to="/events"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  textTransform: "uppercase",
                }}
              >
                Events
              </Link>
            </Typography>
            <Typography variant="h4">
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  textTransform: "uppercase",
                }}
              >
                Contact
              </Link>
            </Typography>
            <Typography variant="h4">
              <Link
                to="/donate"
                style={{
                  textDecoration: "none",
                  color: "#333333",
                  textTransform: "uppercase",
                }}
              >
                Donate
              </Link>
            </Typography>
            <Box
              sx={{
                bgcolor: "#EDC1B6",
                p: 1,
                width: "165px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4">
                <Link
                  to="/donate"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Donate
                </Link>
              </Typography>
            </Box>

            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
