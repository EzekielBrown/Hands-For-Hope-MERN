import { Typography, useTheme, Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;

  return (
    <Box
      sx={{
        padding: "1.5rem 1.5rem 0.75rem 1.5rem",
        backgroundColor: "#EDC1B6",
      }}
    >
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Upcoming Community Events
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="./assets/beach.png"
        style={{ margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Beach Clean Up</Typography>
        <Typography color="white">May 14, 2023</Typography>
      </FlexBetween>
      <Typography color="white" m="0.5rem 0">
      The event aims to remove litter and plastic waste from the beach and promote environmentally friendly practices. Volunteers will be provided with gloves, bags, and other necessary equipment, and will be treated to a free lunch after the cleanup.
      </Typography>
    </Box>
  );
};

export default AdvertWidget;
