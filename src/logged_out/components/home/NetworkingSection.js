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

function NetworkingSection(props) {
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
                L'importanza del Networking {/* Update title later */}
              </Typography>
              <Typography variant="body1" color="textSecondary" align={isWidthUpMd ? "left" : "center"}>
                Fare networking fin da subito è fondamentale per costruire relazioni preziose nel proprio settore. Connettersi con professionisti, mentori e colleghi apre porte a nuove opportunità, scambi di conoscenze e supporto reciproco. Non sottovalutare il potere di una rete solida per la tua crescita personale e professionale. {/* Placeholder text */}
              </Typography>
            </Box>
          </Grid>

          {/* Image Section (Right) */}
          <Hidden mdDown>
            <Grid item md={6}>
              <ZoomImage
                src={`${process.env.PUBLIC_URL}/images/logged_out/image1.jpg`} // Placeholder image
                className={classes.image}
                alt="Networking example"
              />
            </Grid>
          </Hidden>
        </Grid>
      </div>
    </div>
  );
}

NetworkingSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NetworkingSection);
