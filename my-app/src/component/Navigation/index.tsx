import { Drawer as MuiDrawer, styled } from "@mui/material";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import * as React from "react";
import { mainListItems, secondaryListItems } from "../ListItem";

interface IProps {
  open: boolean;
  handleClose: () => void;
}

const Navigation = (props: IProps) => {
  return (
    <Drawer variant="permanent" open={props.open}>
      <Divider sx={{ margin: 4 }} />
      <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
      </List>
    </Drawer>
  );
};

const drawerWidth: number = 340;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    height:'100vh',
    position: "static",
    whiteSpace: "nowrap",
    flexShrink: 0,
        width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(11),
      },
    }),
  },
}));

export default Navigation;
