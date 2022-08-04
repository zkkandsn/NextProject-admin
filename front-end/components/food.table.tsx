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

type Foods = {
  id: number;
  name: string;
  price: number;
  ingredient: string;
  stock: number;
  category_id: number;
  discount: number;
  image: string;
  portion: number;
  tumb_img: string;
  sales: number;
  category: string;
};

export default function FoodTable() {
  const [foods, setFoods] = useState<Foods[]>([]);

  const deleteData = (id: number) => {
    axios.delete("http://localhost:3001/api/foods/delete", {
      data: {
        id: id,
      },
    });
  };

  useEffect(() => {
    fetch("http://localhost:3001/api/foods")
      .then((res) => res.json())
      .then((res) => setFoods(res.data));
  }, []);
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Ingredient</TableCell>
              <TableCell align="left">Stock</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Discount</TableCell>
              <TableCell align="left">Edit</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {foods?.map((e) => (
              <TableRow
                key={e.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {e.id}
                </TableCell>
                <TableCell align="left">{e.name}</TableCell>
                <TableCell align="left">{e.price}</TableCell>
                <TableCell align="left">{e.ingredient}</TableCell>
                <TableCell id="numberColor" align="left">
                  {e.stock}
                </TableCell>
                <TableCell align="left">{e.category}</TableCell>
                <TableCell id="numberColor" align="left">
                  {e.discount}
                </TableCell>
                <TableCell align="left">
                  <Button href="/category/edit" variant="outlined">
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
