import React from 'react'
import {FlashficPageTemplate} from '../../templates/flashfic-post'

const FlashficPostPreview = ({ entry, widgetFor }) => (
  <FlashficPageTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    date={entry.getIn(['data','date'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
  />
)

export default FlashficPostPreview
