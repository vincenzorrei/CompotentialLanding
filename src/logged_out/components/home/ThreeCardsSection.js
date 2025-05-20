import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Card, Button, Box } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";

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
  },
  video: {
    width: "100%", // Take full width of card
    maxHeight: "200px", // Limit height
    objectFit: "cover", // Cover the area, might crop
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2), // Space below video
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  smallText: {
    fontSize: theme.typography.caption.fontSize,
    marginTop: theme.spacing(1),
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
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Pillars
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={isWidthUpMd ? 8 : 4} justifyContent="center">
            {cardContent.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.card}>
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
