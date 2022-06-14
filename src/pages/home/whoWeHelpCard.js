import React from "react"
import * as cardStyle from "./whoWeHelpCard.module.scss"

const WhoWeHelpCard = props => {
  return (
    <div className={cardStyle.container}>

      <div className={cardStyle.box}>
      <img className={cardStyle.image} src={props.image} alt="neoxr webar configation" />
        <div className={cardStyle.title}>{props.title}</div>
        <div className={cardStyle.content}>{props.content}</div>
      </div>
    </div>
  )
}

export default WhoWeHelpCard
