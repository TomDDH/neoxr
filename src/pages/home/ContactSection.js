import React from "react"
import ContactForm from "./ContactForm"
import image from "../../images/contact.png"

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
  TextField,
} from "@mui/material"
import zIndex from "@mui/material/styles/zIndex"
const ContactSection = () => {
  return (
    <Container maxWidth="750px" sx={{
        display:"flex",
        padding:"70px 0",
        gap:"20px",
        position:"relativ",
        maxWidth:"950px",
        alignItems: "center",

    }}>
      <ContactForm></ContactForm>
      <Box sx={{
          position:{xs:"absolute",md:"relative"},
          zIndex:"-1",
          opacity:{xs:"0.3",md:"1"},

      }}>
          <img style={{width:"100%"}} src={image}></img>
      </Box>
    </Container>
  )
}

export default ContactSection
