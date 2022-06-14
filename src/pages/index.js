import React, { useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Header from "./home/header"
import WhoWeHelpSection from "./home/whoWeHelpSection"
import WorksSection from "./home/worksSection"
import Testimonial from "./home/testimonial"
import NewsSection from "./home/NewsSection"
import FAQSection from "./home/FAQSection"
import ContactSection from "./home/ContactSection"
import VistorSection from "./home/vistorSection"
import CompaniesSection from "./home/companiesSection"

const Index = () => {
  useEffect(() => {
    fetch("http://localhost:3030/data")
      .then(response => {
        console.log(response,"response")
        response.json().then(data =>{console.log(data)})
      })
      .catch(err => {
        console.log(err)
      })
      .finally(data => {
        console.log("sucess")
      })
  }, [])

  return (
    <Layout mode="home">
      <Helmet>
        <title>NeoXR AR/VR solution for the web</title>
        <meta name="description" content="neoxr wbsite" />
      </Helmet>

      <Header></Header>
      <VistorSection></VistorSection>
      <WhoWeHelpSection></WhoWeHelpSection>
      <WorksSection></WorksSection>
      <Testimonial></Testimonial>
      {/* <NewsSection></NewsSection> */}
      <CompaniesSection></CompaniesSection>
      <FAQSection></FAQSection>

      <ContactSection></ContactSection>
    </Layout>
  )
}

export default Index
