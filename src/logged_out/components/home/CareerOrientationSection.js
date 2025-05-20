import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, Hidden } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import ZoomImage from "../../../shared/components/ZoomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white, // White background
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
      paddingRight: theme.spacing(4), // Add padding to the right of text on medium+ screens
    },
  },
});

function CareerOrientationSection(props) {
  const { classes, theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.wrapper}>
      <div className="container-fluid">
        <Grid container spacing={isWidthUpMd ? 8 : 4} alignItems="center">
          {/* Text Section (Left) */}
          <Grid item xs={12} md={6}>
            <Box className={classes.textSection}>
              <Typography variant="h3" align={isWidthUpMd ? "left" : "center"} className="lg-mg-bottom">
                Trova il Lavoro Giusto {/* Update title later */}
              </Typography>
              <Typography variant="body1" color="textSecondary" align={isWidthUpMd ? "left" : "center"}>
                Essere correttamente orientati al mondo del lavoro è cruciale per una carriera di successo. Comprendere le proprie passioni, punti di forza e le esigenze del mercato ti aiuta a identificare le opportunità più adatte. Ti supportiamo nel trovare il percorso professionale che valorizzi al meglio il tuo potenziale. {/* Placeholder text */}
              </Typography>
            </Box>
          </Grid>

          {/* Image Section (Right) */}
          <Hidden mdDown>
            <Grid item md={6}>
              <video
                className={classes.video} // Use the new video style
                src="/videos/logged_out/section_videos/video5.mp4"
                autoPlay
                loop
                muted
                playsInline
                alt="Career Orientation example video"
              />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}

CareerOrientationSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CareerOrientationSection);
