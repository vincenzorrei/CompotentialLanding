import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Button, Hidden, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";

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
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));

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
                      <Typography variant={isWidthUpLg ? "h3" : "h4"} className={classes.whiteText}>
                        Free Template for building a SaaS app using
                        Material-UI {/* Update this text later */}
                      </Typography>
                    </Box>
                    <div>
                      <Box mb={2}>
                        <Typography
                          variant={isWidthUpLg ? "h6" : "body1"}
                          className={classes.whiteText} // Apply white text class
                        >
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt {/* Update this text later */}
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
                    <ZoomImage
                      src={`${process.env.PUBLIC_URL}/images/logged_out/headerImage.jpg`}
                      className={classes.image}
                      alt="header example"
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
