import React from 'react'

import styles from '../Props/props.module.css'

const List = ({ children }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.nameColumnHeader} style={{ minWidth: 150 }}>Name</th>
          <th className={styles.typeColumnHeader} style={{ minWidth: 200 }}>Type</th>
          <th className={styles.descriptionColumnHeader}>Description</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default List
