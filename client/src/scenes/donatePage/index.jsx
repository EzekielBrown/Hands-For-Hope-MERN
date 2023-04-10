import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import CallToAction from "scenes/callToAction";
import Footer from "scenes/footer";
import Donate from "scenes/donatePage/donate";

const DonatePage = () => {
    return (
        <Box>
            <Navbar />
            <Donate />
            <CallToAction />
            <Footer />
        </Box>
    ) 
};

export default DonatePage;