import React from "react"
import * as style from "./testimonialCard.module.scss"
import { Typography, Box, Paper, Avatar, Stack } from "@mui/material"
import StarRateIcon from "@mui/icons-material/StarRate"
import { padding } from "@mui/system"

const TestimonialCard = props => {
  const data = props.data

  const list = []

  for (let index = 0; index < data.stars; index++) {
    list.push(index)
  }

  return (
    <div className={style.container}>
      <Paper
        elevation={3}
        sx={{
          width: { xs: "90vw", md: "55vw" },
          height: "40%",
          position: "absolute",
          zIndex: "-1",
          left: "50%",
          top: "50%",
          maxWidth: "550px",
          transform: "translate(-50%, -40%)",
        }}
      >
        {" "}
        test
      </Paper>

      <Paper elevation={3} sx={{ margin: "50px 0" }}>
        <Box
          sx={{
            width: { xs: "80vw", md: "50vw" },
            padding: "25px",
            maxWidth: "500px",
            cursor: "pointer",
          }}
        >
          <Stack direction="row" spacing={0}>
            {list.map(() => (
              <StarRateIcon
                sx={{
                  color: "#FFC947",
                  alignSelf: "start",
                }}
              ></StarRateIcon>
            ))}
          </Stack>

          <Typography
            sx={{
              fontFamily: "arial",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: {xs:"0.8rem", md:"1.2rem"},
              padding: "20px 0",
            }}
          >
            {data.text}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar variant="square" alt="NeoXR logo" src={data.image}></Avatar>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                }}
              >
                {data.name}
              </Typography>
              <Typography>{data.role}</Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </div>
  )
}

export default TestimonialCard
