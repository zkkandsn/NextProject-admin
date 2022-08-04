import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { width } from "@mui/system";
import axios from "axios";
import { useState } from "react";

export default function addCategory() {
  const style = {
    position: "absolute",
    margin: "250px",
  };
  const Name = (e: any) => {
    e.preventDefault();

    const name = e.target[0].value;
    const price = e.target[2].value;
    const ingredient = e.target[4].value;
    const stock = e.target[6].value;
    const category_id = e.target[8].value;
    const discount = e.target[10].value;
    const image = e.target[12].value;
    const portion = e.target[14].value;
    const tumb_img = e.target[16].value;
    const sales = e.target[18].value;
    const category = e.target[20].value;
    axios
      .post("http://localhost:3001/api/foods/add", {
        name: name,
        price: price,
        ingredient: ingredient,
        stock: stock,
        category_id: category_id,
        discount: discount,
        image: image,
        portion: portion,
        tumb_img: tumb_img,
        sales: sales,
        category: category,
      })
      .then((res) => console.log(res.status))
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={Name}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
            name="name"
          />
          <TextField
            required
            id="outlined-required"
            label="Price"
            defaultValue=""
            name="price"
          />
          <TextField
            required
            id="outlined-required"
            label="Ingredient"
            defaultValue=""
            name="ingredient"
          />
          <TextField
            required
            id="outlined-required"
            label="Stock"
            defaultValue=""
            name="stock"
          />
          <TextField
            required
            id="outlined-required"
            label="CategoryId"
            defaultValue=""
            name="category_id"
          />
          <TextField
            required
            id="outlined-required"
            label="Discount"
            defaultValue=""
            name="discount"
          />
          <TextField
            required
            id="outlined-required"
            label="Image"
            defaultValue=""
            name="image"
          />
          <TextField
            required
            id="outlined-required"
            label="Portion"
            defaultValue=""
            name="portion"
          />
          <TextField
            required
            id="outlined-required"
            label="Tumbimg"
            defaultValue=""
            name="tumb_img"
          />
          <TextField
            required
            id="outlined-required"
            label="Sales"
            defaultValue=""
            name="sales"
          />
          <TextField
            required
            id="outlined-required"
            label="Category"
            defaultValue=""
            className="inputColor"
            name="category"
          />
        </div>
        <Button
          sx={{ marginTop: "10px", marginLeft: "15px" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
