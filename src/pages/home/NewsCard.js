import React from "react"

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Button,
  IconButton,
} from "@mui/material"

import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp"
import { Link } from "gatsby"
const NewsCard = props => {



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
        title={props.title}
        subheader={props.date}
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
      <CardMedia component="img" height="194" image={props.image} alt="Paella dish" />
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


          <Link to={props.link}>

          <ArrowRightAltSharpIcon />


          </Link>

        </Button>
      </CardActions>
    </Card>
  )
}

export default NewsCard
