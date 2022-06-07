import React,{useState,useEffect} from "react"
// import AppBar from "@mui/material/AppBar"
// import Box from "@mui/material/Box"
// import Toolbar from "@mui/material/Toolbar"
// import IconButton from "@mui/material/IconButton"
// import Typography from "@mui/material/Typography"
// import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
// import Container from "@mui/material/Container"
// import Avatar from "@mui/material/Avatar"
// import Button from "@mui/material/Button"
// import Tooltip from "@mui/material/Tooltip"
// import MenuItem from "@mui/material/MenuItem"
// import AdbIcon from "@mui/icons-material/Adb"

import logo from "../images/logo.svg"

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
  Drawer,
  Box,
  Avatar,
} from "@mui/material"

import { ThreeDRotation } from "@mui/icons-material"

import { Link } from "gatsby"

import * as navbarCss from "./navBar.module.scss"

// const pages = ["home", "Pricing", "Blog"]

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
    title: "FAQ",
    link: "/questions",
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
const navStyle = {

    background : '#2E3B55',
};


const NavBar = () => {
  //   const [anchorEl, setAnchorEl] = React.useState(null)
  //   const open = Boolean(anchorEl)
  //   const handleClick = event => {
  //     setAnchorEl(event.currentTarget)
  //   }
  //   const handleClose = () => {
  //     setAnchorEl(null)
  //   }

  //   toggleDrawer = (side, open) => () => {
  //     this.setState({
  //       [side]: open,
  //     })
  //   }

  const [open, setOpen] = useState(false)
  const [navBar, setNavBar] = useState(false)

  //   const theme = createTheme({
  //     components: {
  //       MuiDrawer: {
  //         styleOverrides: {
  //           paper: {
  //             background: "orange"
  //           }
  //         }
  //       }
  //     }
  //   });

useEffect(()=>{
    window.addEventListener("scroll",e=>{
        
        // console.log(window.scrollY)

        if(window.scrollY>20){
            setNavBar(true)   
        }else{
            setNavBar(false) 
        }

    })
})


  return (
    <AppBar style= {navBar?{backgroundColor: "#192443",transition: "background-color 1.5s ease"}:null}
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
          {/* <MenuIcon edge="start" size="large" color="white" /> */}
          {/* <img className={navbarCss.logo} href="/" src={logo}></img> */}
          <Avatar variant="square" alt="NeoXR logo" src={logo}  sx={{
            width:{xs:"5rem",md:"7rem"}
          }}/>
          <Typography
            noWrap
            component="a"

            variant="h6"
            sx={{
              fontSize:{ xs:"1.5rem",md:"2rem"},
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
          }}
        >
          {pages.map((page, index) => (
            // <MenuItem key={page} onClick={handleCloseNavMenu}>
            //   <Typography textAlign="center">{page}</Typography>
            // </MenuItem>
            <Button key={page.title} sx={{
                '&:hover': {
                    backgroundColor: '#ffffff14',
                    boxShadow: 'none',
                  },
                  borderRadius: 8,
            
            }}>
              <Link
                className={index === 4 ? navbarCss.titleDemo : navbarCss.title}
                to={page.link}
              >
                {page.title}
              </Link>
            </Button>
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
              {/* <MenuIcon edge="start" size="large" color="white" /> */}
              <img className={navbarCss.logo} src={logo}></img>
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
