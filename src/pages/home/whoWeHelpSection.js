import React from "react"
import {
  Typography,
  Card,
  CardMedia,
  Container,
  Grid,
  Box,
  Button,
  createTheme, 
} from "@mui/material"
import WhoWeHelpCard from "./whoWeHelpCard"

const WhoWeHelpSection = () => {





  return (
    <Container
      sx={{
        display: "flex",
        maxWidth: "1000px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom:"70px",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontFamily: "Archivo Black, sans-serif",
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "black",
          margin: "60px 5px",
          textAlign:"center",
          lineHeight: "150%",
          maxWidth:"600px"
        }}
      >
        We develop AR/VR solutions with business goals in mind
      </Typography>

      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            with: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WhoWeHelpCard />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            with: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WhoWeHelpCard />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            with: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WhoWeHelpCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default WhoWeHelpSection
