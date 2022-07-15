import React from 'react'
import Layout from '../components/Layout'
import { col, phoneImage, content } from './Blog.module.scss'
import { Stack } from '@mui/material'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navigation from '../components/Navigation/Navigation'
function Blog({ data }) {
  const image = getImage(data.markdownRemark.frontmatter.thumb)
  return (
    <Layout>

      <div className="roundedMain">
        <Navigation />
        <div className='s-section'>

          <GatsbyImage className="s-articleImage" image={image} alt={data.markdownRemark.frontmatter.title} />
          <div className='s-overlay'>
            <p className='s-header'>{data.markdownRemark.frontmatter.title.replaceAll('-', ' ')}</p>
            <div className="lineWrapper">
              <div className="line"></div>
            </div>
            <p className='s-short-text'>{data.markdownRemark.excerpt}</p>
          </div>
        </div>
        <div className={content}>
          <div className="bodyText" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
query myQueryAndMyQuery ($article:String) {
  markdownRemark(
    frontmatter: {title: {eq: $article}}
  ) {
    frontmatter {
      title
      author
      date
      category
      thumb {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 900, formats: AUTO, placeholder: BLURRED)
        }
      }
    }
    excerpt
    html
  }
}

`