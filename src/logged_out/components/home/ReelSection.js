import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, IconButton, Chip } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMutedIcon from '@mui/icons-material/VolumeOff';

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper, // Use paper color
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    position: "relative",
    borderTop: `8px solid ${theme.palette.primary.main}`, // Separazione più netta dalla sezione Pillar
    marginTop: theme.spacing(4),
  },
  sectionTitle: {
    marginBottom: theme.spacing(6),
    position: "relative",
    fontWeight: 800,
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: theme.palette.primary.dark,
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: -15,
      left: "50%",
      transform: "translateX(-50%)",
      width: 100,
      height: 4,
      backgroundColor: theme.palette.primary.main, // Decorative line under title
      borderRadius: "2px",
    },
    animation: "$fadeIn 1s ease-in-out",
  },
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(4), // Increased space between videos
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  videoWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: 280, // Slightly larger
    borderRadius: theme.shape.borderRadius * 2,
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.03)", // Slight zoom on hover
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    }
  },
  video: {
    width: "100%",
    height: "auto",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    display: "block",
  },
  videoControls: {
    position: "absolute",
    bottom: theme.spacing(1),
    left: theme.spacing(1),
    right: theme.spacing(1),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: theme.shape.borderRadius,
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    zIndex: 1,
  },
  controlButton: {
    color: "white",
    padding: theme.spacing(0.5),
  },
  tagContainer: {
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(0.5),
    opacity: 0,
    transition: "opacity 0.3s ease-in-out",
    zIndex: 1,
  },
  tagChip: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: "0.75rem",
    height: "auto",
    margin: "2px",
    "& .MuiChip-label": {
      padding: theme.spacing(0.5, 1),
    },
  },
});

const videosData = [
  { src: "/videos/logged_out/reels/reel1.mp4", alt: "Reel 1", tags: ["OpenAI 4.1", "Prompt Engineering"] },
  { src: "/videos/logged_out/reels/reel2.mp4", alt: "Reel 2", tags: ["Web Development", "Font"] },
  { src: "/videos/logged_out/reels/reel3.mp4", alt: "Reel 3", tags: ["GLM", "Github"] },
];

function ReelSection(props) {
  const { classes } = props;

  const videoRefs = useRef([]);
  const [playing, setPlaying] = useState(videosData.map(() => false));
  const [muted, setMuted] = useState(videosData.map(() => true));
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handlePlayPause = (index) => {
    const newPlaying = [...playing];
    if (videoRefs.current[index].paused) {
      videoRefs.current[index].play();
      newPlaying[index] = true;
    } else {
      videoRefs.current[index].pause();
      newPlaying[index] = false;
    }
    setPlaying(newPlaying);
  };

  const handleMuteUnmute = (index) => {
    const newMuted = [...muted];
    videoRefs.current[index].muted = !videoRefs.current[index].muted;
    newMuted[index] = videoRefs.current[index].muted;
    setMuted(newMuted);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={classes.wrapper}>
      <div className="container-fluid">
        <Typography variant="h3" align="center" className={classes.sectionTitle}>
          La vibe di cosa sarà
        </Typography>
        <Box className={classes.videoContainer}>
          {videosData.map((video, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                className={classes.videoWrapper}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className={classes.video}
                  src={video.src}
                  alt={video.alt}
                  muted={muted[index]}
                  loop
                  playsInline
                  onEnded={() => { // Reset play button when video ends
                    const newPlaying = [...playing];
                    newPlaying[index] = false;
                    setPlaying(newPlaying);
                  }}
                />
                <div
                  className={classes.videoControls}
                  style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                >
                  <IconButton
                    className={classes.controlButton}
                    onClick={() => handlePlayPause(index)}
                    aria-label={playing[index] ? "pause" : "play"}
                  >
                    {playing[index] ? <PauseIcon /> : <PlayArrowIcon />}
                  </IconButton>
                  <IconButton
                    className={classes.controlButton}
                    onClick={() => handleMuteUnmute(index)}
                    aria-label={muted[index] ? "unmute" : "mute"}
                  >
                    {muted[index] ? <VolumeMutedIcon /> : <VolumeUpIcon />}
                  </IconButton>
                  </div>
                  <div 
                    className={classes.tagContainer} 
                    style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  >
                    {video.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        className={classes.tagChip}
                        size="small"
                      />
                    ))}
                  </div>
              </Box>
            </Grid>
          ))}
        </Box>
        {/* Add CTA here if needed, as per the plan */}
      </div>
    </div>
  );
}

ReelSection.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ReelSection);
