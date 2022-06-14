import React from "react"
import FAQCard from "./FAQCard"
import {
  Typography,
  Container,
} from "@mui/material"
const faqData = [
  {
    title:
      "Why WebAR?",
    content:
      "The biggest benefit of WebAR is that you do NOT need download any apps. It is easy to access and gain more trafic.",
  },
  {
    title:
      "Does WebAR free?",
    content:
      "Yes, WebAR can be free for most e-commerce products. but for more advance features we need use plugin like 8th wall or Zappar",
  },
  {
    title:
      "What 3D format I need in WebAR?",
    content:
      "WebAR mostly use GLTF, GLB 3D file format. You can have any 3D format such as OBJ, FBX, USDZ, etc. we can convert if for you.",
  },
  {
    title:
      "Waht is minimum 3D mode requirement?",
    content:
      "Highl detailed 3D models or super complex animations can cause web-based experiences to run slowly. Good performance 3D Scene criteria: 100k vertice count. max 6 materials, 1024X1024 textures",
  },
  {
    title:
      "Can I add WebAR to my website",
    content:
      "Yes, you can embed WebAR app to any your website. Any other commerical platforms need deploy on thier could but they offer custom domain for you.",
  },
  {
    title:
      "What 3D frameworks does WebAR support?",
    content:
      "We have a easy work flow integrated into 3D JavaScript frameworks such as A-Frame, three.js. we develope with JavaScript, WebXR Device API, AR quick look ",
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
      {faqData.map((data, index) => (
        <FAQCard key={index} title={data.title} content={data.content} ></FAQCard>
      ))}
    </Container>
  )
}

export default FAQSection
