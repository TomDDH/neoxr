import React from "react"
import imageHead from "./avatars/Oval.png"

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

import TestimonialCard from "./testimonialCard"

import * as style from "./testimonial.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const testimoialData = [
  {
    stars: 5,
    text: "“Awesome experience working with the team at Heroes of Digital! Always very responsive and continuously gives us suggestions to improve our business.”",
    name: "Jacob Jones",
    role: "Co-Founder",
    image: imageHead,
  },
  {
    stars: 5,
    text: "“Awesome experience working with the team at Heroes of Digital! Always very responsive and continuously gives us suggestions to improve our business.”",
    name: "Jacob Jones",
    role: "Co-Founder",
    image: imageHead,
  },  {
    stars: 3,
    text: "“Awesome experience working with the team at Heroes of Digital! Always very responsive and continuously gives us suggestions to improve our business.”",
    name: "Jacob Jones",
    role: "Co-Founder",
    image: imageHead,
  },  {
    stars: 4,
    text: "“Awesome experience working with the team at Heroes of Digital! Always very responsive and continuously gives us suggestions to improve our business.”",
    name: "Jacob Jones",
    role: "Co-Founder",
    image: imageHead,
  },  {
    stars: 4,
    text: "“Awesome experience working with the team at Heroes of Digital! Always very responsive and continuously gives us suggestions to improve our business.”",
    name: "Jacob Jones",
    role: "Co-Founder",
    image: imageHead,
  },
]

const Testimonial = () => {
  return (
    <div className={style.container}>
      <Container
        sx={{
          display: "flex",
          maxWidth: "1000px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px 0",
          marginTop:"50px",
          borderRadius:"5px",
          bgcolor: "#DDEBFD",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontFamily: "Archivo Black, sans-serif",
            fontSize: { xs: "1.5rem", md: "2rem" },
            color: "black",
            margin: "30px 5px",
            textAlign: "center",
            lineHeight: "150%",
            maxWidth: "600px",
          }}
        >
          Testimonials
        </Typography>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          // modules={[Autoplay, Pagination, Navigation]}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            testimoialData.map(data=>(
              <SwiperSlide>
              <TestimonialCard data = {data}></TestimonialCard>
            </SwiperSlide>
  
            ))
          }
        </Swiper>
      </Container>
    </div>
  )
}

export default Testimonial
