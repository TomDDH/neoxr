import React from "react"


import ecomerce from "./helps/ecomerce.png"
import marketing from "./helps/marketing.png"
import museum from "./helps/museum.png"



import { Typography, Container, Grid } from "@mui/material"
import WhoWeHelpCard from "./whoWeHelpCard"

const WhoWeHelpSection = () => {
  const helpsData = [
    {
      title: "3D Configuration for E-Commerce",
      content:
        "With a product configurator, you can easily create an individual version of the product. Then it can then be placed real environment!",
      image: ecomerce,
    },
    {
      title: "Metaverse for Advertising",
      content:
        "WebAR technology is going to be a game changer for marketing. Ultimately bring traffic to your website, events, social media, and your local stores.",
      image: marketing,
    },
    {
      title: "Navigation for Museum",
      content:
        "Turn Museum in to interactive metaverse, result with more engagement. with Navigation webar we can add make a contactless museume tour",
      image: museum,
    },
  ]

  return (
    <Container id="help"
      sx={{
        display: "flex",
        maxWidth: "1000px",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "70px",
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
          textAlign: "center",
          lineHeight: "150%",
          maxWidth: "600px",
        }}
      >
        We develop WebAR solutions with business goals in mind
      </Typography>

      <Grid container spacing={0}>

        {
          helpsData.map((data, index)=>(

            <Grid
            key={index}
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
            <WhoWeHelpCard title={data.title} content={data.content} image={data.image}/>
          </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default WhoWeHelpSection
