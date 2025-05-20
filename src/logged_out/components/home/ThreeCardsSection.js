import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Card, Box, Button } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = (theme) => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    transition: "all 0.4s ease-in-out",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    height: "550px", // Standardized height for all cards
    "&:hover": {
      transform: "translateY(-12px)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      "& $video": {
        transform: "scale(1.05)",
      },
      "& $pillarLabel": {
        opacity: 1,
        transform: "translateY(0)",
      },
      "& $title": {
        color: theme.palette.primary.main,
      },
      "& $cardContent": {
        transform: "translateY(-5px)",
      },
    },
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "5px",
      background: `linear-gradient(90deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
      transform: "scaleX(0)",
      transformOrigin: "left",
      transition: "transform 0.4s ease",
    },
    "&:hover:before": {
      transform: "scaleX(1)",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "30px",
      height: "30px",
      background: theme.palette.primary.main,
      borderRadius: "50% 0 0 0",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    "&:hover:after": {
      opacity: 0.7,
    },
  },
  video: {
    width: "100%", // Take full width of card
    height: "200px", // Standardized height for all videos
    objectFit: "cover", // Cover the area, might crop
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2), // Space below video
    transition: "transform 0.5s ease-in-out, box-shadow 0.3s ease",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  cardContent: {
    transition: "transform 0.3s ease",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 700,
    fontSize: "1.5rem",
    transition: "color 0.3s ease, transform 0.3s ease",
    position: "relative",
    display: "inline-block",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: -5,
      left: "50%",
      width: "40px",
      height: "3px",
      background: theme.palette.primary.main,
      transform: "translateX(-50%)",
      transition: "width 0.3s ease, background 0.3s ease",
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:hover:after": {
      width: "80px",
      background: theme.palette.secondary.main,
    },
  },
  button: {
    marginTop: theme.spacing(2),
    fontWeight: 600,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  smallText: {
    fontSize: theme.typography.caption.fontSize,
    marginTop: theme.spacing(1),
  },
  sectionTitle: {
    position: "relative",
    fontWeight: 800,
    fontSize: "3rem",
    marginBottom: theme.spacing(8),
    textTransform: "uppercase",
    letterSpacing: "2px",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: -15,
      left: "50%",
      transform: "translateX(-50%)",
      width: 100,
      height: 5,
      backgroundColor: theme.palette.primary.main,
      borderRadius: 10,
    },
  },
  pillarLabel: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: "4px 12px",
    borderRadius: 20,
    fontWeight: 700,
    fontSize: "0.75rem",
    letterSpacing: "1px",
    textTransform: "uppercase",
    opacity: 0,
    transform: "translateY(-10px)",
    transition: "all 0.3s ease",
    zIndex: 2,
  },
});

const cardContent = [
  {
    title: "Community",
    description: "Un ecosistema digitale dove stringere connessioni di valore e condividere idee, esperienze e opportunità. Topic tematici, discussioni semplificate dall’AI e spazi pensati per chi vuole crescere insieme agli altri.",
    videoSrc: "/videos/logged_out/section_videos/video1.mp4",
  },
  {
    title: "Nuova formazione",
    description: "Un feed con video brevi e chiari, pensati per imparare in modo veloce. Mentor, tutor e aziende che condividono un nuovo concetto di formazione basato sull’AI applicata ai più svariati ambiti del lavoro.",
    videoSrc: "/videos/logged_out/section_videos/video2.mp4",
  },
  {
    title: "Placement",
    description: "Un motore di matching che connette i profili formati con le aziende in cerca di giovani ad alto potenziale. Portfolio dinamici, tracciabilità delle competenze, e analytics per un recruiting più mirato, efficace e veloce",
    videoSrc: "/videos/logged_out/section_videos/video3.mp4",
  },
];

function ThreeCardsSection(props) {
  const { classes, theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className={classes.sectionTitle}>
          PILLARS
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={isWidthUpMd ? 8 : 4} justifyContent="center">
            {cardContent.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.card}>
                  <div className={classes.pillarLabel}>PILLAR</div>
                  {item.videoSrc && (
                    <video
                      className={classes.video}
                      src={item.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      alt={item.title} // Accessibility: describe the video content
                    />
                  )}
                  <Typography variant="h5" className={classes.title}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* CTA below the cards */}
          <Box mt={6} display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              // Add onClick handler or href for the button later
            >
              entra nella community
            </Button>
            <Typography variant="caption" className={classes.smallText} style={{ fontStyle: 'italic' }}>
              Niente spam, promesso!
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

ThreeCardsSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ThreeCardsSection);
