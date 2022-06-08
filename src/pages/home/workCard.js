import React from "react"
import * as cardStyle from "./workCard.module.scss"

import {Button,CardMedia } from "@mui/material"
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp"

const WorkCard = props => {


  return (
    <div className={cardStyle.card}>
      <div className={cardStyle.box}>
        <div className={cardStyle.videoCard}>
        <video className={cardStyle.video} muted autoPlay playsInline src={props.image}></video>
        </div>
        <div className={cardStyle.title}>{props.title}</div>

        <Button 
            variant="outlined"
              sx={{
                color: "#0E63CA",
                borderRadius: 8,
                margin: "0 10px",
                fontSize:"0.8rem",
                alignSelf:"start",
                fontWeight:"600",
                textTransform: "capitalize",
              }}
            >
              Learn More
              <ArrowRightAltSharpIcon 
                            sx={{
                                marginLeft:"5px",
                              }}
              ></ArrowRightAltSharpIcon>
            </Button>
      </div>
    </div>
  )
}

export default WorkCard
