import { Fragment, useEffect, useState } from "react";
import { Input } from "@mui/material";

import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SearchTabels({ data, searchedData }: any) {
  const [search, setSearch] = useState<any>("");
  const keys = ["first_name", "last_name", "email"];

  useEffect(() => {
    const back = searchQuery(data);
    searchedData(back);
  }, [search]);

  let [checked, setChecked] = useState([true, true, true]);

  const handleChange = (event: any) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange1 = (event: any) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };
  const handleChange2 = (event: any) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };
  const handleChange3 = (event: any) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };

  const searchQuery = (data: any) => {
    return data.filter((item: any) =>
      keys.some((key: any) => item[key].toLowerCase().includes(search))
    );
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", ml: 3 }}>
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: "60%", fontSize: "40px", marginRight: "100px" }}
          placeholder="Search"
        />

        <FormControlLabel
          label="all"
          control={
            <Checkbox
              checked={checked[0] && checked[1] && checked[2]}
              indeterminate={
                checked[0] !== checked[1] || checked[0] !== checked[2]
              }
              onChange={handleChange}
            />
          }
        />

        <Box sx={{ display: "flex", flexDirection: "row", ml: 3 }}>
          <FormControlLabel
            label="first-name"
            control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
          />
          <FormControlLabel
            label="last-name"
            control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
          />
          <FormControlLabel
            label="email"
            control={<Checkbox checked={checked[2]} onChange={handleChange3} />}
          />
        </Box>
      </Box>
    </>
  );
}
