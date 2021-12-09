import React from 'react'

import styles from './props.module.css'

const List = ({ children }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.iconColumnHeader}></th>
          <th className={styles.nameColumnHeader}>Name</th>
          <th className={styles.typeColumnHeader}>Type</th>
          <th className={styles.requiredColumnHeader}>Required</th>
          <th className={styles.defaultColumnHeader}>Default</th>
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
