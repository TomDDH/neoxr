import React from "react"
import FAQCard from "./FAQCard"
import {
  AppBar,
  Grid,
  Typography,
  Container,
  Stack,
  Item,
  Button,
  Menu,
  MenuItem,
  Drawer,
  Box,
  Avatar,
} from "@mui/material"
import { padding } from "@mui/system"

const faqData = [
  {
    title:
      "Does NeoXR have a development environment?",
    content:
      "Yes, 8th Wall has a number of integrations with major volumetric video, or hologram, partners including Microsoft Mixed Reality Capture Studios, 8i, Tetavi, Depthkit and Arcturus.",
  },
  {
    title:
      "Does NeoXR have a development environment?",
    content:
      "Yes, 8th Wall has a number of integrations with major volumetric video, or hologram, partners including Microsoft Mixed Reality Capture Studios, 8i, Tetavi, Depthkit and Arcturus.",
  },
  {
    title:
      "Does NeoXR have a development environment?",
    content:
      "Yes, 8th Wall has a number of integrations with major volumetric video, or hologram, partners including Microsoft Mixed Reality Capture Studios, 8i, Tetavi, Depthkit and Arcturus.",
  },
  {
    title:
      "Does NeoXR have a development environment?",
    content:
      "Yes, 8th Wall has a number of integrations with major volumetric video, or hologram, partners including Microsoft Mixed Reality Capture Studios, 8i, Tetavi, Depthkit and Arcturus.",
  },
  {
    title:
      "Does NeoXR have a development environment?",
    content:
      "Yes, 8th Wall has a number of integrations with major volumetric video, or hologram, partners including Microsoft Mixed Reality Capture Studios, 8i, Tetavi, Depthkit and Arcturus.",
  },
]

const FAQSection = () => {
  return (
    <Container sx={{
        bgcolor:"#F7FAFF",
        padding:"70px 0",
        with:"100vw",
        paddingLeft:"0",
        paddingRight:"0",

    }}>
              <Typography
        variant="h3"
        component="h3"
        sx={{
          fontFamily: "clash display, sans-serif",
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "black",
          margin: "20px 20px",
          textAlign: "start",
          lineHeight: "150%",
          maxWidth:"850px",

        }}
      >
        FAQ
      </Typography>
      {faqData.map(data => (
        <FAQCard data={data}></FAQCard>
      ))}
    </Container>
  )
}

export default FAQSection
