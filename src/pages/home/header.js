import React from "react"
import * as headerStyles from "./header.module.scss"
import { Typography, Container, Box, Button } from "@mui/material"
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp"



const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-end", md: "center" },
          alignItems: "flex-start",
          maxWidth: "1500px",
          paddingLeft: { xs: "30px", md: "80px" },
          paddingRight: { xs: "30px", md: "80px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "75%" },
            marginBottom: { xs: "60px", md: "-60px" },
            textAlign: { xs: "center", md: "start" },
            padding: { xs: "0 5vw", md: "0" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontFamily: "clash display, sans-serif",
              fontSize: { xs: "2rem", md: "4rem" },
              color: "white",
              margin: "10px 0",
              fontWeight: "800",
              letterSpacing: "2px",
              width: { xs: "90vw", md: "100%" },
            }}
          >
            Develop Once. Access Anywhere
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "0.7rem", md: "1rem" },
              color: "white",
              width: { xs: "100%", md: "70%" },
              lineHeight: { xs: "120%", md: "200%" },
              margin: "10px 0",
            }}
          >
            We build Augmented & Virtual Reality experiences that help
            businesses modernize the way they work and discover new ways to
            engage customers.
          </Typography>
          <Box
            sx={{
              flexWrap: "nowrap",
              margin: "10px 0",
              display: "flex",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderStyle: "solid",
                borderColor: "white",
                borderRadius: 8,
                margin: "0 10px",
              }}
            >
              Get Started
              <ArrowRightAltSharpIcon
                sx={{
                  marginLeft: "5px",
                }}
              ></ArrowRightAltSharpIcon>
            </Button>
            <Button
              variant="outlined"
              sx={{
                display: { xs: "none", md: "flex" },
                color: "white",
                borderStyle: "solid",
                borderColor: "white",
                borderRadius: 8,
                margin: "0 10px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          marginBottom: "-5px",
        }}
      >
        <svg
          width="100%"
          height="50"
          viewBox="0 0 1440 50"
          fill="#ecf3fe"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24.8273L40 29.0162C80 33.2838 160 41.5436 240 44.7491C320 47.8367 400 45.8701 480 42.6645C560 39.5769 640 35.2504 720 26.9316C800 18.5342 880 5.94783 960 1.75894C1040 -2.50862 1120 1.81794 1200 5.94783C1280 10.0777 1360 14.4043 1400 16.4299L1440 18.5342V50H1400C1360 50 1280 50 1200 50C1120 50 1040 50 960 50C880 50 800 50 720 50C640 50 560 50 480 50C400 50 320 50 240 50C160 50 80 50 40 50H0V24.8273Z"

          />
        </svg>
      </div>
    </div>
  )
}

export default Header
