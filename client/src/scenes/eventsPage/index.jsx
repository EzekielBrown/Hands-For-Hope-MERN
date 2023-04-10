import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import CallToAction from "scenes/callToAction";
import Footer from "scenes/footer";
import Events from "scenes/eventsPage/events";

const EventsPage = () => {
    return (
        <Box>
            <Navbar />
            <Events />
            <CallToAction />
            <Footer />
        </Box>
    ) 
};

export default EventsPage;