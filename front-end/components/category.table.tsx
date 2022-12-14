import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { display } from "@mui/system";
import axios from "axios";
import { useRouter } from "next/router";

export default function CategoryTable() {
  const [categories, setCategories] = useState<Category>([]);

  const deleteData = (id) => {
    console.log(id);
    axios.delete("http://localhost:3001/api/categories/delete", {
      data: {
        id: id,
      },
    });
  };
  const router = useRouter();

  const handleClick = (e) => {
    console.log(e);
    router.push(`/category/edit/${e}`);
  };
  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => res.json())
      .then((res) => setCategories(res.data));
  }, []);
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Color</TableCell>
              <TableCell align="left">Edit</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((e) => (
              <TableRow
                key={e.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.id}
                </TableCell>
                <TableCell align="left">{e.name}</TableCell>
                <TableCell align="left">{e.color}</TableCell>
                <TableCell align="left">
                  <Button
                    onClick={() => {
                      handleClick(e.id);
                    }}
                    variant="outlined"
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell align="left">
                  <Button
                    onClick={() => {
                      deleteData(e.id);
                    }}
                    color="error"
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
