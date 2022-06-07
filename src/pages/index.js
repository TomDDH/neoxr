import React from "react"
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
const Index = () => {
  return (
    <Layout>
  <Helmet>
    <title>NeoXR AR/VR solution for the web</title>
    <meta name="description" content="neoxr wbsite" />
  </Helmet>

    <Header></Header>
    <VistorSection></VistorSection>
    <WhoWeHelpSection></WhoWeHelpSection>
    <WorksSection></WorksSection>
    <Testimonial></Testimonial>
    <NewsSection></NewsSection>
    <FAQSection></FAQSection>
    <ContactSection></ContactSection>
    </Layout>
  )
}

export default Index