import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, Hidden } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  wrapper: {
    backgroundColor: "#e3f2fd", // Colore azzurro chiaro uniformato per il networking
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    position: "relative",
    overflow: "hidden",
    borderTop: "1px solid rgba(0,0,0,0.05)",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    animation: "$fadeIn 1s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  decorativeElement: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: `linear-gradient(45deg, ${theme.palette.primary.light}40, ${theme.palette.primary.main}20)`,
    top: "-150px",
    right: "-150px",
    zIndex: 0,
    animation: "$pulse 15s infinite alternate",
  },
  "@keyframes pulse": {
    "0%": { transform: "scale(1)" },
    "100%": { transform: "scale(1.1)" },
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  video: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius * 2, // More rounded border
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)", // More sophisticated shadow
    transition: "transform 0.5s ease-in-out, box-shadow 0.5s ease",
    "&:hover": {
      transform: "translateY(-10px) scale(1.02)", // Enhanced lift and scale effect on hover
      boxShadow: "0 30px 50px rgba(0,0,0,0.15)",
    },
    animation: "$slideIn 1s ease-out",
  },
  "@keyframes slideIn": {
    "0%": { transform: "translateX(50px)", opacity: 0 },
    "100%": { transform: "translateX(0)", opacity: 1 },
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
      paddingRight: theme.spacing(6),
    },
    "& h3": {
      marginBottom: theme.spacing(3),
      fontWeight: 800,
      fontSize: "2.5rem",
      position: "relative",
      display: "inline-block",
      color: "#0277bd", // Blu per il networking
      textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: -10,
        left: 0,
        width: "80px",
        height: "4px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "2px",
      },
    },
    "& p": {
      fontSize: "1.2rem",
      lineHeight: 1.8,
      color: "rgba(0,0,0,0.7)",
      fontWeight: 400,
    }
  },
});

function NetworkingSection(props) {
  const { classes, theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div className={classes.wrapper}>
      <div className={classes.decorativeElement}></div>
      <div className="container-fluid">
        <Grid container spacing={isWidthUpMd ? 8 : 4} alignItems="center">
          {/* Text Section (Left) */}
          <Grid item xs={12} md={6}>
            <Box className={classes.textSection}>
              <Typography variant="h3" align={isWidthUpMd ? "left" : "center"} className="lg-mg-bottom">
                L'importanza del Networking
              </Typography>
              <Typography variant="body1" color="textSecondary" align={isWidthUpMd ? "left" : "center"}>
                Fare networking fin da subito è fondamentale per costruire relazioni preziose nel proprio settore. Connettersi con professionisti, mentori e colleghi apre porte a nuove opportunità, scambi di conoscenze e supporto reciproco. Non sottovalutare il potere di una rete solida per la tua crescita personale e professionale.
              </Typography>
            </Box>
          </Grid>

          {/* Image Section (Right) */}
          <Hidden mdDown>
            <Grid item md={6}>
              <video
                className={classes.video}
                src="/videos/logged_out/section_videos/video6.mp4"
                autoPlay
                loop
                muted
                playsInline
                alt="Networking example video"
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
