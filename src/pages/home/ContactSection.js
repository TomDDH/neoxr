import React from "react"
import ContactForm from "./ContactForm"
import image from "../../images/contact.png"

import { Container, Box } from "@mui/material"
const ContactSection = () => {
  return (
    <Container
      maxWidth="750px"
      sx={{
        display: "flex",
        padding: "70px 0",
        gap: "20px",
        position: "relativ",
        maxWidth: "950px",
        alignItems: "center",
      }}
    >
      <ContactForm></ContactForm>
      <Box
        sx={{
          position: { xs: "absolute", md: "relative" },
          zIndex: "-1",
          opacity: { xs: "1", md: "1" },
        }}
      >
        <Box         sx={{
          opacity: { xs: "0.1", md: "1" },
        }}>
          <img
            style={{ width: "100%" }}
            src={image}
            alt="neoxr ar/vr imgae"
          ></img>
        </Box>
      </Box>
    </Container>
  )
}

export default ContactSection
