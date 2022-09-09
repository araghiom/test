import { Paper, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Orders from "../../component/Content/Orders";
import styled from "@emotion/styled";
import { useEffect } from "react";
const OrdersPage = ({title}:any) => {
  useEffect(() => {
    document.title = title;
  });
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}>
      <Toolbar sx={{height:100}}/>
      <ContentWrapper>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
         
        </Paper>
      </ContentWrapper>
    </Box>
  );
};

const ContentWrapper = styled("div")`
  min-height: 100vh;
  margin: 20px;
`;

export default OrdersPage;
