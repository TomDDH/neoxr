import React from "react"
import ContactSection from "./home/ContactSection"
import Layout from "../components/layout"
import { Box, Typography, Container } from "@mui/material"

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: "clash display, sans-serif",
            fontSize: { xs: "1.5rem", md: "3rem" },
            color: "black",
            margin: "50px auto",
            textAlign: "center",
            lineHeight: "150%",
            marginTop: "130px",
            fontWeight: "600",
            maxWidth:"650px"
          }}
        >
          Contact us for free demo and free consolation
        </Typography>

</Container>
<ContactSection>
  
</ContactSection>
    </Layout>
  )
}

export default Contact