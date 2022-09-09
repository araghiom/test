import Toolbar from "@mui/material/Toolbar";
import { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Users } from "../../Constant/DUMMYDATA";
import SearchTabels from "../../component/Shared/Search";
import Tabels from "../../component/Shared/Tables";

export default function TabelPage({title}:any) {
  const [dataAfterSearch, setDataAfterSearch] = useState<any>(Users);
  useEffect(() => {
    document.title = title;
  });



  const handler = (data: any) => {
    setDataAfterSearch(data);
  };

  return (
    <>
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
          padding: "30px",
        }}>
        <Toolbar sx={{ height: 100 }} />
        <SearchTabels data={Users} searchedData={handler} />
        <Toolbar sx={{ height: 50 }} />
        <Tabels data={dataAfterSearch} />
      </Box>
    </>
  );
}
