import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#BAC8C9",
          padding: "1rem",
          width: "100%",
          height: "120px",
          marginBottom: "1rem",
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
            fontSize: "30px",
            letterSpacing: "10px",
            textTransform: "uppercase",
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>
      <Box sx={{ padding: "0 2rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Accordion sx={{ bgcolor: "#F5F5F5", mb: "1rem" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">What is Hands for Hope?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Hands for Hope is a charity website that connects individuals
                  who need help with small tasks, such as cooking for a small
                  event or cleaning a local business, with volunteers who are
                  willing to lend a hand.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: "#F5F5F5", mb: "1rem" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  How does Hands for Hope work?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Individuals can post their requests for help on the Hands for
                  Hope website, and volunteers can browse the listings to find
                  tasks they are interested in helping with. Once a volunteer
                  expresses interest in a task, they can communicate with the
                  individual to coordinate the details of the task.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: "#F5F5F5", mb: "1rem"}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  What types of tasks can I request help with?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  You can request help with a variety of small tasks, such as
                  yard work, household chores, event planning, and more. If you
                  are unsure whether your task is appropriate for Hands for
                  Hope, feel free to reach out to us for guidance.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ bgcolor: "#F5F5F5" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  Can I request help with a task that requires special skills?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Yes, you can request help with a task that requires special
                  skills, such as plumbing or electrical work. However, we
                  recommend that you verify the volunteer's qualifications and
                  experience before agreeing to work together on such a task.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion sx={{ bgcolor: "#F5F5F5", mb: "1rem" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  Who can volunteer with Hands for Hope?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  Anyone who is willing to help others is welcome to volunteer
                  with Hands for Hope. Volunteers can choose which tasks they
                  would like to help with based on their interests and
                  availability.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "#F5F5F5", mb: "1rem" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  Is there a fee to use Hands for Hope?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  No, using Hands for Hope is completely free for both
                  individuals requesting help and volunteers offering to help.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "#F5F5F5", mb: "1rem" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  How can I be sure that volunteers are trustworthy?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  While we do not screen volunteers, we encourage individuals to
                  communicate with potential volunteers before agreeing to work
                  together. You can also leave feedback for volunteers after
                  they have helped you, which can help others decide whether to
                  work with them in the future.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "#F5F5F5", mb: "1rem" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  How can I get involved with Hands for Hope?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  If you would like to get involved with Hands for Hope as a
                  volunteer, you can sign up on our website. If you would like
                  to support our charity in other ways, such as by making a
                  donation, please reach out to us for more information.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FAQ;
