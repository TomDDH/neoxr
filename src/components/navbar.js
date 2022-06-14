import React, { useState, useEffect } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import logo from "../images/logo.svg"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as navbarCss from "./navBar.module.scss"
import { Tune } from "@mui/icons-material"

import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  Button,
  MenuItem,
  Drawer,
  Box,
  Avatar,
} from "@mui/material"

const pages = [
  {
    title: "Who we help",
    link: "/#help",
  },
  {
    title: "How to Create WebAR",
    link: "/howWebARWork",
  },
  {
    title: "FAQ",
    link: "/faq",
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

const NavBar = props => {
  const [open, setOpen] = useState(false)
  const [navBar, setNavBar] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (window.scrollY > 20) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    })
  })

  return (
    <AppBar
      style={
        navBar || props.mode !== "home"
          ? {
              backgroundColor: "#192443",
              transition: "background-color 1.5s ease",
            }
          : null
      }
      position="fixed"
      color="transparent"
      sx={{
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          paddingRight: { xs: "20px", md: "80px" },
          paddingLeft: { xs: "20px", md: "80px" },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/">
          <Avatar
            variant="square"
            alt="NeoXR logo"
            src={logo}
            sx={{
              width: { xs: "5rem", md: "7rem" },
            }}
          />
          </Link>
          <Typography
            noWrap
            component="a"
            variant="h6"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              paddingLeft: "20px",
            }}
          >
            NeoXR
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            fontWeight: "500",
          }}
        >
          {pages.map((page, index) => (
            <Link
              className={index === 4 ? navbarCss.titleDemo : navbarCss.title}
              to={page.link}
            >
              <Button
                key={page.title}
                sx={{
                  "&:hover": {
                    backgroundColor: "#ffffff14",
                    boxShadow: "none",
                  },
                  color: "white",
                  borderRadius: 8,
                }}
              >
                {page.title}
              </Button>
            </Link>
          ))}
        </Stack>
        <Button
          onClick={() => setOpen(true)}
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <MenuIcon
            sx={{
              color: "white",
              textDecoration: "none",
            }}
            edge="start"
            size="large"
          />
        </Button>

        <Drawer
          open={open}
          anchor={"top"}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "white",
            },
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <img
                className={navbarCss.logo}
                src={logo}
                alt="neoxr ar vr"
              ></img>
              <Typography
                noWrap
                component="a"
                href="/"
                variant="h6"
                sx={{
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#00a5f1",
                  textDecoration: "none",
                  paddingLeft: "20px",
                }}
              >
                NeoXR
              </Typography>
            </Box>
            <Button onClick={() => setOpen(false)}>
              <MenuIcon
                sx={{
                  color: "#00a5f1",
                  textDecoration: "none",
                }}
                edge="start"
                size="large"
              />
            </Button>
          </Toolbar>
          {pages.map(page => (
            <MenuItem
              key={page.title}
              sx={{
                justifyContent: "center",
                marginBottom: "10px",
                fontWeight: "700",
              }}
            >
              <Link className={navbarCss.titleDrawer} to={page.link}>
                {page.title}
              </Link>
            </MenuItem>
          ))}
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}
export default NavBar

// ?<Link to="/blog">blog</Link>
