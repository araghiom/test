import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fragment, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import styled from "@emotion/styled";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import { TablePaginationActions } from "./PageInation";

export default function Tabels({ data }: any) {
  let err = [{}, { "": "  not found" }];
  const [edata, setEdata] = useState<any>(data);
  const [count, setCount] = useState<number>(1);
  const [postPerPage, setPostPerPage] = useState<number>(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (data.length === 0) {
      return setEdata(err);
    }
    setEdata(data);
  }, [data]);


  useEffect(() => {
    setPage(1);
    setCount(edata.length);
  }, [edata, data]);

  const indexOfLastPost = page * postPerPage;
  const indexFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = edata.slice(indexFirstPost, indexOfLastPost);

  const handleChangePage = (event: any, newPage: number) => {
    if (newPage < Math.ceil(count / postPerPage)) {
      setPage(newPage);
    }
  };
  const handleChangePostPerPage = (event: any) => {
    setPostPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  return (
    <>
      <Table size="medium">
        <TableHead>
          <TableRow>
            {Object.keys(currentPosts[1]).map((item) => (
              <TableCellCustom key={data[item]}>
                {item.toString().toUpperCase()}
              </TableCellCustom>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {currentPosts.map((row: any) => (
            <TableRow key={row.id}>
              {Object.values(row).map((item: any) => (
                <TableCellCustom key={item.id}>{item}</TableCellCustom>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              className="omid"
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={6}
              count={count}
              rowsPerPage={postPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangePostPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}

const TableCellCustom = styled(TableCell)`
  font-size: 20px;
`;
