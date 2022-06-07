import React from "react"

import {
  Accordion,
  AccordionDetails,
  Typography,
  Container,
  Select,
  Item,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
  Paper,
} from "@mui/material"
import { padding } from "@mui/system"

const VisitorDataCard = props => {

const data = props.data

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
        {data.title}
      </Typography>

      <Paper
        elevation={2}
        sx={{
          width: data.amount,
          textAlign:"end",
          padding:"5px 10px",
          bgcolor:"#126ee2",
          fontSize:{ xs: "0.6rem", md: "1rem" },
          color:"white",
          fontFamily: "Inter Black, sans-serif",

        }}
      >
        {data.number}
      </Paper>
    </Container>
  )
}

export default VisitorDataCard
