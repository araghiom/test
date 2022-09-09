import { styled, Box } from "@mui/material";
import Header from "../Header";
import {  useState } from "react";
import Navigation from "../Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [open, setOpen] = useState(false);
  
  const toggleDrawer = () => {
    setOpen((status) => !status);
  };

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Box component="header">
          <Header onOpen={toggleDrawer}  ></Header>
        </Box>
        <Navigation open={open} handleClose={toggleDrawer} />
        <Outlet />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled("div")`
  min-height: 100vh;
`;
const ContentWrapper = styled("div")`
  display: flex;
  min-height: 100vh;
`;

export default Layout;
