import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { width } from "@mui/system";
import axios from "axios";
import { useState } from "react";

export default function addCategory() {
  const Name = (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const color = e.target[2].value;
    axios
      .post("http://localhost:3001/api/categories/add", {
        name: name,
        color: color,
      })
      .then((res) => console.log(res.statusText))
      .catch((error) => console.error(error));
  };

  const style = {
    position: "absolute",
    margin: "250px",
  };

  return (
    <Container>
      <Box
        // style={style}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={Name}
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Color"
          defaultValue=""
          name="color"
          className="inputColor"
        />
        <Button
          sx={{ marginTop: "10px", marginLeft: "15px" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
        <p id="success">Амжилттай илгээгдлээ.</p>
      </Box>
    </Container>
  );
}
