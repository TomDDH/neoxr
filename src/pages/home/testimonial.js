import React from "react"
import brendan from "./avatars/brendan.jpg"
import jacob from "./avatars/jacob.jpg"
import joe from "./avatars/joe.jpg"
import khalidah from "./avatars/khalidah.jpg"
import mohamad from "./avatars/mohamad.jpg"


import {
  Typography,
  Container,
} from "@mui/material"
import TestimonialCard from "./testimonialCard"
import * as style from "./testimonial.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
// import { Autoplay, Pagination, Navigation } from "swiper"
import { Pagination, Navigation } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const testimoialData = [
  {
    stars: 5,
    text: "“Awesome experience working with NeoXR! Always very responsive and continuously gives us suggestions to improve our business.”",
    name: "Jacob Jones",
    role: "Start-up",
    image: jacob,
  },
  {
    stars: 5,
    text: "“Great communication and exactly what we were looking for, would highly recommend. Thanks, Tom!”",
    name: "Joe Younes",
    role: "Co-Founder",
    image: joe,
  },  {
    stars: 4,
    text: "“Phenomenal service!!! Tom went above and beyond the call of duty and was exceptionally reliable and accessible.”",
    name: "Khalidah B",
    role: "Art Director",
    image: khalidah,
  },  {
    stars: 4,
    text: "“very satisfied, amazing dedication, the best AR webar developer we had projects with, very commited and responsible. I'm very satisfied with The Team.”",
    name: "Mohamad Okal",
    role: "Manager",
    image: mohamad,
  },  {
    stars: 4,
    text: "“Great job! Thanks again Tom. Greatly appreciated.”",
    name: "Brendan Giles",
    role: "Start-up",
    image: brendan,
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
            testimoialData.map((data, index)=>(
              <SwiperSlide key={index}>
              <TestimonialCard  stars={data.stars} text={data.text} name={data.name} role={data.role} image={data.image}    > </TestimonialCard>
            </SwiperSlide>
  
            ))
          }
        </Swiper>
      </Container>
    </div>
  )
}

export default Testimonial
