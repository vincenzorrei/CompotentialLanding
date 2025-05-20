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
    description: "Descrizione della community...", // Placeholder text
  },
  {
    title: "Formazione",
    description: "Descrizione della formazione...", // Placeholder text
  },
  {
    title: "Placement",
    description: "Descrizione del placement...", // Placeholder text
  },
];

function ThreeCardsSection(props) {
  const { classes, theme } = props;
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Community, Formazione, Placement {/* Update title later */}
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={isWidthUpMd ? 8 : 4} justifyContent="center">
            {cardContent.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card className={classes.card}>
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
