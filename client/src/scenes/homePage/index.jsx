import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import Hero from "scenes/homePage/hero";
import Mission from "scenes/homePage/mission";
import Section1 from "scenes/homePage/section1";
import Section2 from "scenes/homePage/section2";
import CallToAction from "scenes/callToAction";
import Footer from "scenes/footer";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Mission />
      <Section1 />
      <Section2 />
      <CallToAction />
      <Footer />
    </Box>
  );
};

export default HomePage;
