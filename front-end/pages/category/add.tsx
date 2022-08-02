import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { width } from "@mui/system";

export default function addCategory() {
  const style = {
    position: "absolute",
    margin: "250px",
  };
  return (
    <Container>
      <Box
        style={style}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Color"
            defaultValue=""
          />
        </div>
        <Button
          sx={{ marginTop: "10px", marginLeft: "15px" }}
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
}
