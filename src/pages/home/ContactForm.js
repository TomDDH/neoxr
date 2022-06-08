import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

import {
  Typography,
  Container,
  Select,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
  TextField,
} from "@mui/material"

const ContactForm = () => {
  const form = useRef()

  const [service, setService] = React.useState("")

  const handleChange = event => {
    setService(event.target.value)
  }

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_1uk5r3i",
        "template_zjzmz17",
        form.current,
        "i_AeJCMa5X9DrLWCA"
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Container
      sx={{
        maxWidth: "500px",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        ref={form}
        onSubmit={sendEmail}
        autoComplete="off"
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "clash display, sans-serif",
            fontSize: { xs: "2rem", md: "4rem" },
            color: "black",
            margin: "10px 0",
            fontWeight: "800",
            letterSpacing: "2px",
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "clash display, sans-serif",
            fontSize: { xs: "1rem", md: "1rem" },
            color: "black",
            margin: "10px 0",
            fontWeight: "500",
            letterSpacing: "2px",
            lineHeight: "150%",
          }}
        >
          Got questions, suggestions or feedback? We'd love to hear from you!
        </Typography>
        <TextField
          id="outlined-basic"
          label="Name"
          name="user_name"
          variant="standard"
          required
        />
        <TextField
          id="filled-basic"
          label="Email"
          name="user_email"
          variant="standard"
          type="email"
          required
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            General Inquiry
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={service}
            onChange={handleChange}
            label="General Inquiry"
            name="question"
            required
          >
            <MenuItem value={"3D"}>3D configuration</MenuItem>
            <MenuItem value={"marketing"}>AR Advertisiong</MenuItem>
            <MenuItem value={"musuem"}>AR Musuem</MenuItem>
            <MenuItem value={"webAR"}>webAR</MenuItem>
            <MenuItem value={"webVR"}>webVR</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Message"
          name="message"
          variant="standard"
          sx={{
            paddingBottm: "60px",
            marginBottom: "4rem",
            height: "2rem",
          }}
          required
        />
        <Button type="submit" value="Send" variant="contained">
          Submit
        </Button>
      </Box>
    </Container>
  )
}

export default ContactForm
