import React from 'react'
import PropTypes from 'prop-types'
import {BlogPageTemplate} from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPageTemplate
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    date={entry.getIn(['data','date'])}
    title={entry.getIn(['data', 'title'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
    content={widgetFor('body')}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
