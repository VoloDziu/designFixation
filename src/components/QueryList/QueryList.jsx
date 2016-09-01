import React from 'react'
import {connect} from 'react-redux'

import styles from './QueryList.css'
import Query from '../Query'

class QueryList extends React.Component {
  render () {
    const {queries} = this.props

    return (
      <div className={styles.QueryList}>
        {queries.map((q, index) =>
          <div
            key={index}
            className={styles.QueryList__item}>
            <Query
              query={q} />
          </div>
        )}
      </div>
    )
  }
}

export default connect(
  state => {
    return {
      queries: [...state.data.queries].sort((a, b) => b.examplesCount - a.examplesCount)
    }
  }
)(QueryList)
