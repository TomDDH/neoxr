import React from "react"
import WorkCard from "./workCard"
import video from "./videos/car.mp4"
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
import * as style from "./worksSection.module.scss"

const cardData = [
  {
    image: video,
    title: "Medical VR Intubation Simulation",
    link: "/contact",
  },
  {
    image: video,
    title: "Medical VR Intubation Simulation",
    link: "/contact",
  },
  {
    image: video,
    title: "Medical VR Intubation Simulation",
    link: "/contact",
  },
]

const WorksSection = () => {
  return (
    <div className={style.container}>
      <div
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        <svg
          width="100%"
          height="80"
          viewBox="0 0 1440 80"
          fill="#ecf3fe"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 46.6958L1392 54.4662C1344 62.3826 1248 77.7045 1152 79.7839C1056 81.7174 960 77.8139 864 77.8139C768 77.8139 672 89.4878 576 87.5543C480 85.4749 384 70.1529 288 66.14C192 62.1271 96 62.3824 48 66.14L1.54974e-06 70.0434L7.67312e-06 0.000102993L48 0.000107189C96 0.000111386 192 0.000119778 288 0.000128171C384 0.000136563 480 0.000144956 576 0.000153349C672 0.000161741 768 0.000170134 864 0.000178526C960 0.000186919 1056 0.000195311 1152 0.000203704C1248 0.000212097 1344 0.000220489 1392 0.000224686L1440 0.000228882L1440 46.6958Z" />{" "}
        </svg>
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          marginTop: "-10px",
        }}
      >
        <svg
          width="100%"
          height="60"
          viewBox="0 0 1440 60"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1440 35.0218L1392 40.8496C1344 46.7868 1248 58.2783 1152 59.8379C1056 61.288 960 52.5325 864 52.5325C768 52.5325 672 61.2879 576 59.8378C480 58.2782 384 46.7868 288 43.7771C192 40.7674 96 46.7867 48 49.6049L6.52822e-07 52.5325L5.24536e-06 2.66606e-06L48 6.86235e-06C96 1.10586e-05 192 1.94512e-05 288 2.78438e-05C384 3.62364e-05 480 4.4629e-05 576 5.30216e-05C672 6.14142e-05 768 6.98068e-05 864 7.81993e-05C960 8.65919e-05 1056 9.49845e-05 1152 0.000103377C1248 0.00011177 1344 0.000120162 1392 0.000124359L1440 0.000128555L1440 35.0218Z"
          />{" "}
        </svg>
      </div>
      <Container
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
          component="h3"
          sx={{
            fontFamily: "clash display, sans-serif",
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: "white",
            margin: { xs: "20px 50px", md: "50px 50px" },
            textAlign: "center",
            lineHeight: "150%",
            maxWidth: "600px",
            marginTop:"120px",
          }}
        >
          Our Works
        </Typography>
        <Grid container spacing={0} sx={{ width: "auto" }}>
          {cardData.map(data => (
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
              <WorkCard data={data}></WorkCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default WorksSection
