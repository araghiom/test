import React, { useEffect } from "react";
import Chart from "../../component/Content/Chart";
import { Paper, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import styled from "@emotion/styled";

const Charts = ({title}:any) => {

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
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 700,
          }}>
          <Chart />
        </Paper>
      </ContentWrapper>
    </Box>
  );
};

const ContentWrapper = styled("div")`
  min-height: 100vh;
  margin: 20px;
`;

export default Charts;
