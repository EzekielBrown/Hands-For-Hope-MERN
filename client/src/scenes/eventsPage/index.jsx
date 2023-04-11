import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import CallToAction from "scenes/callToAction";
import Footer from "scenes/footer";
import Events from "scenes/eventsPage/events";
import PastEvents from "scenes/eventsPage/pastevents";

const EventsPage = () => {
    return (
        <Box>
            <Navbar />
            <Events />
            <PastEvents />
            <CallToAction />
            <Footer />
        </Box>
    ) 
};

export default EventsPage;