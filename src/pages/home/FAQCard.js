import React, { useState } from "react"

import {
  Accordion,
  AccordionDetails,
  Typography,
  Container,
  AccordionSummary,
  Divider,
} from "@mui/material"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const FAQCard = props => {

  const [expanded, setExpanded] = useState(false)
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Container maxWidth="750px"
    sx={{
        maxWidth:"750px",
        width:"100%"
    }}
    >
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{
          margin: "5px 0",
          boxShadow: "none",
          bgcolor: "#ffffff00",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0, fontFamily: "Roboto",fontWeight:"800",color:"black" }}>
            {props.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.content}</Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{
          borderColor:"#00000073",
          height:"3px",
      }}></Divider>
    </Container>
  )
}

export default FAQCard
