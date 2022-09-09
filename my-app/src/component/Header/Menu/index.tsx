import React, { useContext } from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItemIcon, Typography } from "@mui/material";
import AuthContext from "../../../Context/AuthProvider";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";

interface DefaultMenuProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}
const MenuHeader = ({
  isMenuOpen,
  handleMenuClose,
  anchorEl,
}: DefaultMenuProps) => {
  const { clearLogin } = useContext<any>(AuthContext);

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="primary-search-account-menu"
        keepMounted
        open={isMenuOpen}
        onClick={handleMenuClose}
        onClose={handleMenuClose}
        sx={{
          "& .MuiTypography-root": {
            fontSize: "30px",
            color: "#fff",
            top: "99px",
            left: "573px",
          },
          "& .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
            { backgroundColor: "#565353" },
        }}>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <AssignmentIndIcon  sx={{ fontSize: 60, paddingRight: 4 , color: "white" , }} />
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
            Profile
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <AccountBalanceOutlinedIcon  sx={{ fontSize: 60, paddingRight: 4 ,color: "white"}} />
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
            ballance
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={clearLogin}>
          <ListItemIcon>
            <LogoutIcon sx={{ fontSize: 60, paddingRight: 4 ,color: "white",}} />
          </ListItemIcon>
          <Typography variant="body2" color="text.secondary">
            Sign Out
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
export default MenuHeader;
