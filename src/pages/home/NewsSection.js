import React from "react"
import NewsCard from "./NewsCard"

import image from "../../images/home/news.png"

import {
  Grid,
  Typography,
  Container,
} from "@mui/material"

const newsData = [
  {
    title: "How WebAR help “SpongeBob on the run” Movie to Go Viral?",
    image: image,
    date: "September 14, 2016",
    content:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    link: "/blogs/spongeBob",
  },
  {
    title: "CoinMarketCap takes the Capital conference to the metaverse",
    image: image,
    WritableStreamDefaultWriter: "September 14, 2016",
    content:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    link: "/blogs/spongeBob",
  },
  {
    title: "CoinMarketCap takes the Capital conference to the metaverse",
    image: image,
    date: "September 14, 2016",
    content:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    link: "/blogs/spongeBob",
  },
  {
    title: "CoinMarketCap takes the Capital conference to the metaverse",
    image: image,
    date: "September 14, 2016",
    content:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    link: "/blogs/spongeBob",
  },
]

const NewsSection = () => {
  return (
    <Container sx={{
        padding:"70px 0",
    }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{
          fontFamily: "clash display, sans-serif",
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "black",
          margin: "30px 5px",
          textAlign: "center",
          lineHeight: "150%",
          maxWidth: "600px",

        }}
      >
        News
      </Typography>

      <Grid container spacing={0}>
        {newsData.map((data, index) => (
          <Grid
          key={index}
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              with: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding:"10px 10px"
            }}
          >
            <NewsCard title={data.title}  image={data.image} date={data.date} content={data.content} link={data.link}></NewsCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default NewsSection
