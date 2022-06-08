import React from "react"

import {
  Typography,
  Container,
  Paper,
} from "@mui/material"

const VisitorDataCard = props => {


  return (
    <Container sx={{
        padding:"10px 0"
    }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontFamily: "Archivo Black, sans-serif",
          fontSize: { xs: "1rem", md: "1rem" },
          color: "black",
          textAlign: "start",
          lineHeight: "150%",
          alignSelf:"start",
          padding:"5px",
        
        }}
      >
        {props.title}
      </Typography>

      <Paper
        elevation={2}
        sx={{
          width: props.amount,
          textAlign:"end",
          padding:"5px 10px",
          bgcolor:"#126ee2",
          fontSize:{ xs: "0.6rem", md: "1rem" },
          color:"white",
          fontFamily: "Inter Black, sans-serif",

        }}
      >
        {props.number}
      </Paper>
    </Container>
  )
}

export default VisitorDataCard
