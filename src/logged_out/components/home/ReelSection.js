import React, { Fragment, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Box, IconButton, Chip } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMutedIcon from '@mui/icons-material/VolumeOff';

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.grey[200], // Use a light grey background
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  videoContainer: {
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2), // Space between videos
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", // Stack videos vertically on small screens
      alignItems: "center",
    },
  },
  videoWrapper: {
    position: "relative",
    width: "100%", // Take full width of grid item
    maxWidth: 250, // Max width for vertical video
    // Removed CSS hover opacity controls, will be handled by React state
  },
  video: {
    width: "100%", // Take full width of video wrapper
    height: "auto",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
    display: "block", // Remove extra space below video
  },
  videoControls: {
    position: "absolute",
    bottom: theme.spacing(1), // Changed from top to bottom
    left: theme.spacing(1), // Added left alignment
    right: theme.spacing(1), // Added right alignment
    display: "flex",
    justifyContent: "space-between", // Keep space-between for play/mute
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
    backgroundColor: theme.palette.primary.main, // Changed to blue
    color: "white",
    fontSize: "0.7rem",
    height: "auto",
    "& .MuiChip-label": {
      padding: theme.spacing(0.5),
    },
  },
});

const videosData = [
  { src: "/videos/logged_out/reel1.mp4", alt: "Reel 1", tags: ["OpenAI 4.1", "Prompt Engineering"] },
  { src: "/videos/logged_out/reel2.mp4", alt: "Reel 2", tags: ["Web Development", "Font"] },
  { src: "/videos/logged_out/reel3.mp4", alt: "Reel 3", tags: ["GLM", "Github"] },
];

function ReelSection(props) {
  const { classes, theme } = props;
  const isWidthUpSm = useMediaQuery(theme.breakpoints.up("sm"));

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
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Guarda i nostri Reel {/* Update title later */}
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
