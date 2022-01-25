import * as React from "react"
import { graphql, Link } from 'gatsby'
import "./style.css"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import {
  logoWrapper,
  logoStyle,
  descWrapper,
  descStyling,
  navigation,
  col,
  phoneImage,
  cardWrapper,
  statWrapper
} from './index.module.scss'
import Tab from "../components/tab"
import NavItem from "../components/NavItem/NavItem"
import Button from "../components/Button/Button"
import Card from "../components/Card/Card"
import Stats from "../components/Stats/Stats"
import { faCodeBranch, faFolderOpen, faSignal, faLaptop, faGem, faRocket, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

// markup
const links = [{
  label: 'What is mPowa',
  id: 'intro',
  link: ''
}, {
  label: 'What will you find?',
  id: 'first',
  link: ''
}, {
  label: 'Services',
  id: 'second',
  link: ''
}, {
  label: 'Download the App',
  id: 'cta',
  link: ''
}]
const CARD = [{
  title: 'Employment',
  icon: faBriefcase,
  color: '#3dff9e',
  text: "Services and events that will help you upskill yourself, prepare for interviews or shift careers"
}, {
  title: 'Entrepreneurship',
  icon: faRocket,
  color: '#fd4c50',
  text: "Connect you to enterprise support initiatives to commercialise or grow your business"
}, {
  title: 'Education',
  icon: faGraduationCap,
  color: '#3092f0',
  text: "Find schools and programmes that will give you a competitive edge for employment or self-employment opportunities"
}]
const STATS = [{
  icon: faCodeBranch,
  number: '5,120',
  label: 'Schools',
  color: '#00a352'
}, {
  icon: faFolderOpen,
  number: '8,192',
  label: 'Wifi Hotspots',
  color: '#0e50b8'
}, {
  icon: faSignal,
  number: '2,048',
  label: 'Post Offices',
  color: '#a00205'
}, {
  icon: faLaptop,
  number: '4,096',
  label: 'Business Centres',
  color: '#ab9303'
}, {
  icon: faGem,
  number: '1,024',
  label: 'Technology Stations',
  color: '#000000'
},]
const IndexPage = (data) => {
  console.log(data.data)
  return (
    <Layout>
      <Tab title="Home" />
      <div className={logoWrapper}>
        <StaticImage className={logoStyle} src="../images/icon.png" />
      </div>
      <div className={descWrapper}>
        <p className={descStyling}>
          Connecting SA Youth to nearby Services & Initiatives
        </p>
      </div>
      <div className="roundedMain">
        <div className={navigation}>
          {links.map((c, i) => {
            return (
              <NavItem key={i} text={c.label} id={c.id}></NavItem>
            )
          })}
        </div>
        <section id="intro" className="section">
          <div className={col}>
            <div>
              <p className="pageTitle">What is mPowa?</p>
              <div className="lineWrapper">
                <div className="line"></div>
              </div>
              <p className="bodyText">mPowa, a member of the SA Youth Network, is a mobile app for South African youth, providing them with location-based and profile-specific information about services relating to employment, education and entrepreneurship in their vicinity.</p>
              <Button text="Learn More"></Button>
            </div>
          </div>
          <div className={col} style={{ paddingBottom: 0 }}>
            <StaticImage className={phoneImage} src="../images/phone.png" alt="prototype" placeholder="blurred" />
          </div>
        </section>
        <section id="first" className="section" style={{ flexDirection: 'column', paddingBottom: 50 }}>
          <div className="sectionHeader">
            <div className="titleLineWrapper">
              <p className="pageTitle">What will you find?</p>
              <div className="lineWrapper" style={{ justifyContent: 'center' }}>
                <div className="line"></div>
              </div>

            </div>
          </div>
          <div className={cardWrapper}>
            {CARD.map((c, i) => {
              return (<Card key={i} color={c.color} title={c.title} text={c.text} icon={c.icon} />)
            })}
          </div>
          <Button text="Learn More"></Button>
        </section>
        <section id="second" className="section" style={{ flexDirection: 'column' }}>
          <div className="sectionHeader">
            <div className="titleLineWrapper">
              <p className="pageTitle">Services</p>
              <div className="lineWrapper" style={{ justifyContent: 'center' }}>
                <div className="line"></div>
              </div>

            </div>
          </div>
          <div className={statWrapper}>
            {STATS.map((c, i) => {
              return (<Stats key={i} color={c.color} label={c.label} number={c.number} icon={c.icon} />)
            })}
          </div>
        </section>
        <section id="cta" className="section" style={{ flexDirection: 'column', paddingBottom: 50 }}>
          <div className="sectionHeader">
            <div className="titleLineWrapper">
              <p className="pageTitle">Download the app</p>
              <div className="lineWrapper" style={{ justifyContent: 'center' }}>
                <div className="line"></div>
              </div>
              <p className="bodyText">Let mPowa help you find services and events that will drive your professional career - whatever it may be. Your first step towards a brighter future starts with downloading it from the Google Play or Apple app store and setting up your account in a few easy steps.</p>
            </div>
          </div>
          <div className={cardWrapper} style={{justifyContent: 'center'}}>
           <Link to="https://play.google.com/store/apps/details?id=com.mlab.mpowa" target="_blank">
           <StaticImage style={{width: 300}} src="../images/playstore.png" />
           </Link>
           <Link style={{width: 300}} to="https://apps.apple.com/za/app/mpowa/id1560352984" target="_blank">
           <StaticImage src="../images/appleStore.png" />
           </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query HomeQuery { whatIsMpowa: markdownRemark {
    whatIsMpowa: frontmatter {
      title
      description
    }
  }
}

`