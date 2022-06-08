import React from "react"
import { Typography, Box, Paper, Avatar, Stack } from "@mui/material"
import StarRateIcon from "@mui/icons-material/StarRate"

const TestimonialCard = props => {
  const list = []

  for (let index = 0; index <props.stars; index++) {
    list.push(index)
  }

  return (
    <div className={null}>
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
            {list.map((data, index) => (
              <StarRateIcon
              key = {index}
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
            {props.text}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar variant="square" alt="NeoXR logo" src={props.image}></Avatar>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: "700",
                }}
              >
                {props.name}
              </Typography>
              <Typography>{props.role}</Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </div>
  )
}

export default TestimonialCard
