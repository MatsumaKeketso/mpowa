import * as React from "react"
import { graphql, Link } from 'gatsby'
import "./style.css"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import {
  logoWrapper,
  logoStyle,
  descWrapper,
  descStyling,
  col,
  phoneImage,
  cardWrapper,
  statWrapper
} from './index.module.scss'
import Tab from "../components/tab"
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Button from '@mui/material/Button';
import CustomButton from "../components/Button/Button"
import Card from "../components/Card/Card"
import Stats from "../components/Stats/Stats"
import { faCodeBranch, faFolderOpen, faSignal, faLaptop, faGem, faRocket, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Navigation from "../components/Navigation/Navigation"
import NewsItem from "../components/NewsCard/NewsItem"
import Stack from '@mui/material/Stack';
import { getImage } from "gatsby-plugin-image"
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
  const NEWS = data.data.blogs.edges
  console.log()
  return (
    <Layout>
      <Tab title="Home" />
      <div className={logoWrapper}>
        <StaticImage className={logoStyle} src="../images/icon.png" alt="" />
      </div>
      <div className={descWrapper}>
        <p className={descStyling}>
          Connecting SA Youth to nearby Services & Initiatives
        </p>
      </div>
      <div className="roundedMain">
        <Navigation />
        <section id="intro" className="section">

          <div className={col}>
            <div>
              <p className="pageTitle">What is mPowa?</p>
              <div className="lineWrapper">
                <div className="line"></div>
              </div>
              <p className="bodyText">mPowa, a member of the SA Youth Network, is a mobile app for South African youth, providing them with location-based and profile-specific information about services relating to employment, education and entrepreneurship in their vicinity.</p>
              <CustomButton text="Learn More" link="/about"></CustomButton>
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
          <CustomButton text="Learn More" link="/about"></CustomButton>
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
              <p className="pageTitle">News</p>
              <div className="lineWrapper" style={{ justifyContent: 'center' }}>
                <div className="line"></div>
              </div>
              <p className="bodyText">Let mPowa help you find services and events that will drive your professional career - whatever it may be. Your first step towards a brighter future starts with downloading it from the Google Play or Apple app store and setting up your account in a few easy steps.</p>
            </div>
          </div>
          <div className="layout_">
            {NEWS.map(c => {
              const image = getImage(c.node.frontmatter.thumb)
              return (<NewsItem data={c} image={image} key={c.node.frontmatter.path} />)
            })}
          </div>

          <Stack sx={{ p: 5 }}>
            <Button variant="outlined" endIcon={<ChevronRightRoundedIcon />}>
              <Link to="/Blogs">View All
              </Link>
            </Button>
          </Stack>
        </section>
        <section id="cta" className="section appBG" style={{ flexDirection: 'column', paddingBottom: 50 }}>
          <div className="sectionHeader">
            <div className="titleLineWrapper">
              <p className="pageTitle">Download the App</p>
              <div className="lineWrapper" style={{ justifyContent: 'center' }}>
                <div className="line"></div>
              </div>
              <p className="bodyText">Let mPowa help you find services and events that will drive your professional career - whatever it may be. Your first step towards a brighter future starts with downloading it from the Google Play or Apple app store and setting up your account in a few easy steps.</p>
            </div>
          </div>
          <div className={cardWrapper} style={{ justifyContent: 'center' }}>
            <Link to="https://play.google.com/store/apps/details?id=com.mlab.mpowa" target="_blank">
              <StaticImage style={{ width: 300 }} src="../images/playstore.png" alt="" />
            </Link>
            <Link style={{ width: 300 }} to="https://apps.apple.com/za/app/mpowa/id1560352984" target="_blank">
              <StaticImage src="../images/appleStore.png" alt="" />
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query HomeQuery  {
  blogs: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/(Blogs)/"}}
    sort: {fields: frontmatter___date, order: DESC}
    limit: 3
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date
          author
          category
          thumb {
            childImageSharp {
              gatsbyImageData(quality: 100, width: 500, formats: AUTO, placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
}
`