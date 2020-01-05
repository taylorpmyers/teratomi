import React from 'react'
import {BookPageTemplate} from '../../templates/book-post'

const BookPostPreview = ({ entry, widgetFor }) => (
  <BookPageTemplate
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
    date={entry.getIn(['data','date'])}
    pages={entry.getIn(['data','pages'])}
    amazonlink={entry.getIn(['data','amazonlink'])}
    smashwordslink={entry.getIn(['data','smashwordslink'])}
    id={entry.getIn(['data','id'])}
  />
)

export default BookPostPreview
