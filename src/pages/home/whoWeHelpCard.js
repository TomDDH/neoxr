import React from "react"
import card1 from "../../images/whoWeHelp/cart.png"
import * as cardStyle from "./whoWeHelpCard.module.scss"

const WhoWeHelpCard = props => {
  return (
    <div className={cardStyle.container}>

      <div className={cardStyle.box}>
      <img className={cardStyle.image} src={card1} alt="Logo" />
        <div className={cardStyle.title}>3D Configuration for E-Commerce</div>
        <div className={cardStyle.content}>We develop custom augmented reality solutions to drive business growth, improve brand awareness, and boost brand loyalty</div>
      </div>
    </div>
  )
}

export default WhoWeHelpCard
