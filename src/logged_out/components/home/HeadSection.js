import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Button, Hidden, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  video: { // Style for the video
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  whiteText: {
    color: theme.palette.common.white, // Set text color to white
  },
  smallText: {
    fontSize: theme.typography.caption.fontSize, // Smaller font size for "niente spam"
    color: theme.palette.common.white, // White color for "niente spam"
    marginTop: theme.spacing(1), // Add some space above
  },
  compotentialTitle: {
    fontSize: "5rem", // Slightly larger
    fontWeight: "900", // Bolder
    lineHeight: 1.2,
    textAlign: "center", // Center the title
    color: theme.palette.common.white,
    textShadow: "3px 3px 6px rgba(0,0,0,0.4)", // More pronounced shadow
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  subtitleText: {
    color: theme.palette.common.white,
    textAlign: "center",
    marginTop: theme.spacing(2), // Add some space below the main title
    marginBottom: theme.spacing(3), // Add some space above the button
    fontSize: "1.5rem", // Increased size
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem", // Increased size for small screens
    },
  },
  newParagraph: {
    color: theme.palette.common.white,
    textAlign: "left",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    fontSize: "1.2rem", // Increased size
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem", // Increased size for small screens
    },
  },
});

function HeadSection(props) {
  const { classes, theme } = props;

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            {/* Removed Card component */}
            <div className={classNames(classes.containerFix, "container")}>
              <Box justifyContent="space-between" className="row">
                <Grid item xs={12} md={5}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%"
                    alignItems="center"
                  >
                    <Box mb={4}>
                      <Typography className={classes.compotentialTitle}>
                        Compotential
                      </Typography>
                    </Box>
                    <div>
                      <Box mb={2}>
                        <Typography
                          className={classes.subtitleText}
                        >
                          Il <strong>network</strong> degli <strong>aspiranti professionisti</strong> per emergere con le <strong>skill</strong> più richieste
                        </Typography>
                      </Box>
                      <Box mb={2}>
                        <Typography
                          className={classes.newParagraph}
                        >
                          Compotantial è l’app che collega aspiranti professionisti, aziende edTech e imprese, in un ecosistema dinamico dove le skill contano davvero. Condividi le tue competenze in mini feed, scopri corsi, eventi, e inizia a costruire opportunità concrete con chi crede nel merito.
                        </Typography>
                      </Box>
                      {/* New CTA Button */}
                      <Button
                        variant="contained"
                        color="primary" // Use primary color for the button
                        fullWidth
                        className={classes.extraLargeButton}
                        classes={{ label: classes.extraLargeButtonLabel }}
                        // Add onClick handler or href for the button later
                      >
                        entra nella community
                      </Button>
                      {/* "niente spam" text */}
                      <Typography variant="caption" className={classes.smallText} style={{ fontStyle: 'italic', textAlign: 'center' }}>
                        Niente spam, promesso!
                      </Typography>
                    </div>
                  </Box>
                </Grid>
                <Hidden mdDown>
                  <Grid item md={6}>
                    <video
                      className={classes.video} // Use the new video style
                      src="/videos/logged_out/section_videos/video4.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      alt="header video"
                    />
                  </Grid>
                </Hidden>
              </Box>
            </div>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);
