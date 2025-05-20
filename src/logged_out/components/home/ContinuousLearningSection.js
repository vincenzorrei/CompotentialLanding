import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, Hidden } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.grey[200], // Use a light grey background
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  textSection: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4), // Add padding to the left of text on medium+ screens
    },
  },
});

function ContinuousLearningSection(props) {
  const { classes, theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.wrapper}>
      <div className="container-fluid">
        <Grid container spacing={isWidthUpMd ? 8 : 4} alignItems="center">
          {/* Image Section (Left) */}
          <Hidden mdDown>
            <Grid item md={6}>
              <video
                className={classes.video} // Use the new video style
                src="/videos/logged_out/section_videos/video8.mp4"
                autoPlay
                loop
                muted
                playsInline
                alt="Continuous Learning example video"
              />
            </Grid>
          </Hidden>

          {/* Text Section (Right) */}
          <Grid item xs={12} md={6}>
            <Box className={classes.textSection}>
              <Typography variant="h3" align={isWidthUpMd ? "right" : "center"} className="lg-mg-bottom">
                L'importanza della Formazione Continua {/* Update title later */}
              </Typography>
              <Typography variant="body1" color="textSecondary" align={isWidthUpMd ? "right" : "center"}>
                In un mondo in rapida evoluzione, la formazione continua è essenziale per rimanere rilevanti e competitivi. Acquisire nuove competenze e aggiornare quelle esistenti ti permette di adattarti ai cambiamenti del mercato del lavoro e di cogliere nuove opportunità di crescita. Investire nella tua formazione è investire nel tuo futuro. {/* Placeholder text */}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

ContinuousLearningSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ContinuousLearningSection);
