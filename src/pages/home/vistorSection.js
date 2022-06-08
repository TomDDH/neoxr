import React from "react"

import {
  Typography,
  Container,
  Box,
  Link,
} from "@mui/material"

import VisitorDataCard from "./visitorDataCard"
const visitData = [
  {
    title: "WebAR",
    number: "3.5 Billion",
    amount: "100%",
  },
  {
    title: "ARKit",
    number: "1.25 Billion",
    amount: "45%",
  },
  {
    title: "ARCore",
    number: "891 Million",
    amount: "32%",
  },
]

const VistorSection = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "70px 0",
        backgroundColor: "#ecf3fe",
        overflow:"hidden",
        paddingBottom:"120px"
      }}
    >

      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "black",
            textAlign: "center",
            lineHeight: "100%",
            maxWidth: "400px",
          }}
        >
          Reach More Visitor with WebAR
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "0.6rem", md: "1rem" },
            color: "black",
            textAlign: "center",
            lineHeight: "150%",
            maxWidth: "600px",
          }}
        >
          WebAR Wall supports more smartphone users than any other AR platform.
        </Typography>
        <Box
          sx={{
            maxWidth: "750px",
            bgcolor: "white",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            borderRadius: "10px",
            padding: "10px 40px",
            zIndex:"10",
          }}
        >
          {visitData.map((data, index) => (
            <VisitorDataCard key={index} title={data.title} number={data.number} amount={data.amount}></VisitorDataCard>
          ))}
          <Link
            href="#"
            sx={{
              fontFamily: "Inter, sans-serif",
              fontSize: { xs: "0.6rem", md: "1rem" },
              color: "black",
              textAlign: "center",
              lineHeight: "150%",
              maxWidth: "600px",
              alignSelf: "end",
              margin: "0 10px",
            }}
          >
            Source: AR Insider, 2021
          </Link>
        </Box>
        <div
        style={{
            position:"absolute",
          width: "420px",
          height: "420px",
          right: "0",
          bottom: "0",
          background: "rgb(18 110 226 / 9%)",
          filter: "blur(80px)",
          zIndex: "1",
        }}
      ></div>
      </Container>

    </div>
  )
}

export default VistorSection
