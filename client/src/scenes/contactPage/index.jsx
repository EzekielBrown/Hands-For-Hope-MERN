import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import Contact from "scenes/contactPage/contact";
import FAQ from "scenes/contactPage/faq";
import Footer from "scenes/footer";

const ContactPage = () => {
    return (
        <Box>
            <Navbar />
            <Contact />
            <FAQ />
            <Footer />
        </Box>
    )   
};


export default ContactPage;