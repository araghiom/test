import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import { Link } from "react-router-dom";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import BallotIcon from "@mui/icons-material/Ballot";

export const mainListItems = (
  <React.Fragment>
    <Link
      to="home"
      title="Home"
      style={{
        textDecoration: "none",
      }}>
      <ListItemButton sx={{ paddingTop: 5 }}>
        <ListItemIcon>
          <DashboardIcon sx={{ fontSize: 60, paddingRight: 4 }} />
        </ListItemIcon>
        <Typography component="h1" variant="h4" sx={{ color: "#757575" }}>
          Home
        </Typography>
      </ListItemButton>
    </Link>
    <Divider />
    <Link
      to="orders"
      style={{
        textDecoration: "none",
      }}>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon sx={{ fontSize: 60, paddingRight: 4 }} />
        </ListItemIcon>
        <Typography component="h1" variant="h4" sx={{ color: "#757575" }}>
          Orders
        </Typography>
      </ListItemButton>
    </Link>
    <Divider />
    <Link
      to="charts"
      style={{
        textDecoration: "none",
      }}>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon sx={{ fontSize: 60, paddingRight: 4 }} />
        </ListItemIcon>
        <Typography component="h1" variant="h4" sx={{ color: "#757575" }}>
          Charts
        </Typography>
      </ListItemButton>
    </Link>
    <Divider />
    <Link
      to="table"
      style={{
        textDecoration: "none",
      }}>
      <ListItemButton>
        <ListItemIcon>
          <BackupTableIcon sx={{ fontSize: 60, paddingRight: 4 }} />
        </ListItemIcon>
        <Typography component="h1" variant="h4" sx={{ color: "#757575" }}>
          Table
        </Typography>
      </ListItemButton>
    </Link>
    <Divider />
    <Link
      to="setting"
      style={{
        textDecoration: "none",
      }}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon sx={{ fontSize: 60, paddingRight: 4 }} />
        </ListItemIcon>

        <Typography component="h1" variant="h4" sx={{ color: "#757575" }}>
          Setting
        </Typography>
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset></ListSubheader>
    <Link
      to="submit"
      style={{
        textDecoration: "none",
      }}>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon sx={{ fontSize: 60, paddingRight: 4 }} />
        </ListItemIcon>
        <Typography component="h1" variant="h4" sx={{ color: "#757575" }}>
          Submit
        </Typography>
      </ListItemButton>
    </Link>
    <Divider />
    <Link to="form">
      <ListItemButton>
        <ListItemIcon>
          <AnnouncementIcon sx={{ fontSize: 60, paddingRight: 4 }} />
        </ListItemIcon>
        <Typography component="h1" variant="h4" sx={{ color: "#757575" }}>
          Message
        </Typography>
      </ListItemButton>
    </Link>
    <Divider />
    <ListItemButton>
      <ListItemIcon>
        <BallotIcon sx={{ fontSize: 60, paddingRight: 4 }} />
      </ListItemIcon>
      <Typography component="h1" variant="h4" sx={{ color: "#757575" }}>
        Form
      </Typography>
    </ListItemButton>
    <Divider />
  </React.Fragment>
);
