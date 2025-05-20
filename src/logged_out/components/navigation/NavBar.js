import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Hidden, IconButton, Box } from "@mui/material";
import withStyles from '@mui/styles/withStyles';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = theme => ({
  appBar: {
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)", // Thinner, more modern shadow
    backgroundColor: theme.palette.common.white,
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1, 2), // More precise padding
  },
  brandText: {
    flexGrow: 1, // Allow logo area to grow
  },
  centerLinks: {
    flexGrow: 1, // Allow center links area to grow
    textAlign: "center", // Center align the links within this div
  },
  rightLinks: {
    flexGrow: 1, // Allow right links area to grow
    textAlign: "right", // Right align the links within this div
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 600, // More prominent text
    textTransform: "none", // Remove default uppercase of buttons
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.primary.main, // Change color on hover
    }
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;

  const centerMenuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/reel", // Assuming '/reel' is the path for the Reel section
      name: "Reel",
      icon: <BookIcon className="text-white" /> // Placeholder icon, replace if needed
    }
  ];

  const rightMenuItems = [];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {/* Left Section (Logo) */}
          <Box className={classes.brandText} component={Link} to="/">
            <img src="/images/logged_out/compotential_logo.png" alt="Compotential Logo" style={{ height: '40px' }} /> {/* Adjust height as needed */}
          </Box>

          {/* Center Section (Home, Reel) */}
          <Hidden mdDown>
            <div className={classes.centerLinks}>
              {centerMenuItems.map(element => (
                <Link
                  key={element.name}
                  to={element.link}
                  className={classes.noDecoration}
                  onClick={handleMobileDrawerClose}
                >
                  <Button
                    color="secondary"
                    size="large"
                    classes={{ text: classes.menuButtonText }}
                  >
                    {element.name}
                  </Button>
                </Link>
              ))}
            </div>
          </Hidden>

          {/* Right Section (Blog, Register, Login) */}
          <div className={classes.rightLinks}>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
                size="large">
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden mdDown>
              {rightMenuItems.map(element => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={[...centerMenuItems, ...rightMenuItems]} // Combine for mobile drawer
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
