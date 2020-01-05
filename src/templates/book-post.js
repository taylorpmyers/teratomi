import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/MyLayout"
import AmazonButton from '../img/amazonButton.png'
import SmashwordsButton from '../img/smashwordsButton.png'
// cover,title, author, pages, date, series,smashwords,amazon, tags
export const BookPageTemplate = post => {
    const image = post.featuredimage.childImageSharp ? <Img className="flex max-w-md mx-auto" fluid={post.featuredimage.childImageSharp.fluid} /> 
    : <img alt = "preview for post" width="300px" src={post.featuredimage} />
    const date = post.featuredimage.childImageSharp ? post.date : post.date.toISOString().slice(0,10)
    const checkLink = link => {return link === " " ? "none" : "inline-block"}
    return (
        <div className=" mx-8 mb-10 max-w-2xl">
          <h1 style={{ textDecorationColor: "#B83280" }} className="font-serif underline">{post.title}</h1>
          <h4 className=" font-serif text-teal-600">{date}</h4> 
          <p>Pages: {post.pages}</p>
          {image}
          <p className = "mt-10">{post.description}</p>
          <div>
            <a style = {{display: checkLink(post.amazonlink)}}href={post.amazonlink}><img alt="asdf" className = "mb-5 max-w-xs" src={AmazonButton} /></a>
            <a style = {{display: checkLink(post.smashwordslink)}}href={post.smashwordslink}><img alt="asdf" className = "mb-5 max-w-xs" src={SmashwordsButton} /></a>
          </div>
          <div className="mt-10">
            {post.tags.map(tag => (
              <span key={`${tag}${post.title}`} className="inline-block text-lg text-teal-600">{`#${tag}`}&nbsp;</span>
            ))}
          </div>
          <div className="netlifyContent"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
    )
  }




const BookPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <BookPageTemplate
        description={post.frontmatter.description}
        pages={post.frontmatter.pages}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        smashwordslink={post.frontmatter.smashwordslink}
        amazonlink={post.frontmatter.amazonlink}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

export default BookPage

export const pageQuery = graphql`
  query BookPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html  
      frontmatter {
        title
        date(formatString: "MMMM DD,YYYY")
        tags
        description
        pages
        smashwordslink
        amazonlink
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 240, maxHeight: 450, quality:100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

