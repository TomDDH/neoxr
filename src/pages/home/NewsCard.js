import React from "react"
import * as style from "./NewsCard.module.scss"

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  Box,
  Avatar,
  Button,
  IconButton,
} from "@mui/material"

import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp"

const NewsCard = props => {


const data = props.data

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#f44336" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
        subheader={data.date}
        sx={{
          fontFamily: "clash display",
          color: "black",
        }}
        titleTypographyProps={{
          variant: "h4",
          sx: {
            color: "black",
            fontSize: "1rem",
            fontWeight: "400",
            fontFamily: "clash display",
          },
        }}
      />
      <CardMedia component="img" height="194" image={data.image} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: "red" }} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button
          variant="outlined"
          aria-label="share"
          sx={{
            borderRadius: 8,
            margin: "0 10px",
            marginLeft:"auto"
          }}
        >
          <ArrowRightAltSharpIcon
          ></ArrowRightAltSharpIcon>
        </Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard
