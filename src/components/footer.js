import React from "react"
import { Link } from "gatsby"
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Stack,
  Item,
  Button,
  Menu,
  MenuItem,
  Grid,
  Box,
  Avatar,
} from "@mui/material"
import logo from "../images/logo.svg"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import { margin, textAlign } from "@mui/system"

const pages = [
  {
    title: "Who we help",
    link: "/",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Free Demo",
    link: "/contact",
  },
]

const helpPage = [
  {
    title: "FAQ",
    link: "/questions",
  },
  {
    title: "Terms & Conditions",
    link: "/contact",
  },
  {
    title: "Privacy Policy",
    link: "/contact",
  },
]

const Footer = () => {
  return (
    <footer
      style={{
        background: "#162352",
        width: "100%",
        margin: "0",
        padding:"70px 0",
        textAlign:"center"

      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          width:"100%",
          display: "flex",
          height: "100%",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "20px",
          alignContent: "stretch",
        }}
      >
        <Grid
          xs={12}
          md={3}
          sx={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Avatar
            variant="square"
            alt="NeoXR logo"
            src={logo}
            sx={{
              width: { xs: "5rem", md: "7rem" },
            }}
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "0.5rem", md: "0.5rem" },
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
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
          >
            <TwitterIcon color="primary" />
            <LinkedInIcon color="primary" />
            <FacebookIcon color="primary" />
            <InstagramIcon color="primary" />
          </Stack>
        </Grid>
        <Grid
          xs={12}
          md={3}
          sx={{
            minWidth: "120px",
            display: "flex",
            gap: "2px",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "1.2rem", md: "1rem" },
              color: "white",
              color: "white",
              fontWeight:"600",
              margin:"20px 0"
            }}
          >
            Company
          </Typography>

          {pages.map(data => (
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#ffffff14",
                  boxShadow: "none",
                },
                justifyContent: "flex-start",
                borderRadius: 8,
              }}
            >
              <Link
                to={data.link}
                style={{
                  color: "white",
                  fontWeight:"600"
                }}
              >
                {data.title}
              </Link>
            </Button>
          ))}
        </Grid>


        <Grid
          xs={12}
          md={3}
          sx={{
            minWidth: "120px",
            display: "flex",
            gap: "2px",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "1.2rem", md: "1rem" },
              color: "white",
              fontWeight:"600",
              margin:"20px 0"
            }}
          >
            Help
          </Typography>

          {helpPage.map(data => (
            <Button
              sx={{
                "&:hover": {
                  backgroundColor: "#ffffff14",
                  boxShadow: "none",
                },
                justifyContent: "flex-start",
                borderRadius: 8,
              }}
            >
              <Link
                to={data.link}
                style={{
                  color: "white",
                  fontWeight:"600"
                }}
              >
                {data.title}
              </Link>
            </Button>
          ))}
        </Grid>
      </Grid>

      <p>
        Site developed by Ibaslogic &copy; {new Date().getFullYear().toString()}{" "}
      </p>
    </footer>
  )
}

export default Footer

// <Grid container spacing={0}>
// {newsData.map(data => (
//   <Grid
//     item
//     xs={12}
//     md={3}
//     sx={{
//       display: "flex",
//       with: "100%",
//       justifyContent: "center",
//       alignItems: "center",
//       padding:"10px 10px"
//     }}
//   >
//     <NewsCard data={data}></NewsCard>
//   </Grid>
// ))}
// </Grid>
