import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { width } from "@mui/system";
import axios from "axios";
import { useState, useEffect } from "react";

export default function cat({ category }) {
  console.log(category[0].id);
  return (
    <>
      <Container>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="name"
            name="Name"
            defaultValue={category[0].name}
          />
          <TextField
            required
            id="outlined-required"
            label="Color"
            defaultValue={category[0].color}
            name="color"
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
    </>
  );
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:3001/api/categories");

  return {
    fallback: false,
    paths: res.data.data.map((category) => ({
      params: { id: category.id.toString() },
    })),
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `http://localhost:3001/api/categories/${params.id}`
  );
  return {
    props: {
      category: res.data.data,
    },
  };
}
