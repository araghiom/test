import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import HubIcon from "@mui/icons-material/Hub";
import { useEffect, useState } from "react";
import MenuHeader from "./Menu";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import EventEmitter from "events";
import { getEventListeners } from "stream";
import { eventNames } from "process";

interface Iprops {
  onOpen: () => void;
}

const Header = (props: Iprops) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [title, setTitle] = useState<any>();


  const open = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    setTitle(document.title);
    console.log("object");
  }, [anchorEl]);

  return (
    <AppBar
      position="absolute"
      sx={{ height: 100, backgroundColor: "#262626" }}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={props.onOpen}
          sx={{
            marginRight: "20px",
          }}>
          <MenuIcon sx={{ fontSize: 60, paddingLeft: 0.2, paddingTop: 1 }} />
        </IconButton>

        <Typography
          component="h1"
          variant="h3"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, paddingTop: 1 }}>
          {title}
        </Typography>

        <IconButton color="inherit">
          <Badge
            badgeContent={1}
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                fontSize: "30px",
                height: "40px",
                width: "40px",
                Top: "105px",
                transform: " scale(1) translate(60%, -30%)",
              },
            }}>
            <HubIcon sx={{ fontSize: 45 }} />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge
            badgeContent={4}
            color="secondary"
            sx={{
              marginRight: 6,
              marginLeft: 3,
              "& .MuiBadge-badge": {
                fontSize: "30px",
                height: "40px",
                width: "40px",
                Top: "105px",
                transform: " scale(1) translate(50%, -20%)",
              },
            }}>
            <NotificationsIcon sx={{ fontSize: 50 }} />
          </Badge>
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <Avatar
            sx={{ marginLeft: 4, width: 80, height: 80 }}
            onClick={handleProfileMenuOpen}
          />
          <MenuHeader
            isMenuOpen={open}
            handleMenuClose={handleMenuClose}
            anchorEl={anchorEl}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MuiAppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default Header;
